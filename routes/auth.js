const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
    try {
        jwt.verify(
            req.query.authToken,
            process.env.ACCESS_TOKEN_SECRET,
            async (err, userFromJWT) => {
                if (err) {
                    return res.json({ expired: true });
                } else {
                    const user = await User.findOne({ _id: userFromJWT.id });
                    return res.json({ user });
                }
            }
        );
    } catch (err) {
        return res.json(err);
    }
});
router.post("/google", async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findOne({ email: body.email });

        if (user) {
            const authToken = jwt.sign(
                { id: user._id },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "7d" }
            );
            user.authToken = authToken;
            await user.save();

            return res.json({ user });
        } else {
            let user = new User({
                email: body.email,
                pfp: body.pfp,
                name: body.name,
            });
            await user.save();

            const newUser = await User.findOne({ email: user.email });
            const authToken = jwt.sign(
                { id: newUser._id },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "7d" }
            );
            await User.updateOne(
                { email: newUser.email },
                { $set: { authToken } }
            );

            user.authToken = authToken;
            await user.save();
            return res.json({ user });
        }
    } catch (err) {
        console.log(err);
        return res.json({ err });
    }
});

module.exports = router;
