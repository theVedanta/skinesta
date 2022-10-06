const router = require("express").Router();
const Product = require("../models/Product");
const Schedule = require("../models/Schedule");

router.post("/create", async (req, res) => {
    const { price, name, desc, img } = req.body;
    await new Product({ price, name, desc, img }).save();

    res.json({ done: true });
});
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post("/search", async (req, res) => {
    try {
        const { smooth, type, id } = req.query;

        if (id === "undefined") {
            return res.json({ err: true });
        }

        let products = [];

        let smoothProducts = [];
        let smoothProduct = "";

        if (smooth !== "true") {
            smoothProducts = await Product.find({
                $text: { $search: "smooth" },
            });
            smoothProduct =
                smoothProducts[
                    Math.floor(Math.random() * smoothProducts.length)
                ];

            products.push(smoothProduct);
        }

        const skinProducts = await Product.find({ $text: { $search: type } });
        const skinProduct =
            skinProducts[Math.floor(Math.random() * skinProducts.length)];

        products.push(skinProduct);

        const schedule = await makeSchedule(
            id,
            smooth,
            type,
            smoothProduct,
            skinProduct
        );

        res.json({ done: true, products, schedule });
    } catch (err) {
        res.json({ err });
    }
});

router.get("/schedule", async (req, res) => {
    const schedule = await Schedule.findOne({ user: req.query.id });
    res.json({ schedule: schedule ? schedule : false });
});

async function makeSchedule(id, smooth, type, smoothProduct, skinProduct) {
    let scheduleLeastCount = 1;

    if (smooth !== "true") {
        scheduleLeastCount++;
    }

    if (type === "dry") {
        scheduleLeastCount--;
    } else if (type === "oily") {
        scheduleLeastCount++;
    }

    let tasks = {};

    for (let i = 1; i <= scheduleLeastCount; i++) {
        const time = i * 7;
        let smoothOcc = 1;
        let skinOcc = 1;

        tasks[time.toString()] = [];

        if (smooth !== "true") smoothOcc = 2;
        if (type === "oily") skinOcc = 3;
        else if (type === "neutral") skinOcc = 2;

        if (i === 1) {
            tasks[time.toString()].push(skinProduct);
            smoothProduct !== "" && tasks[time.toString()].push(smoothProduct);
        }
        if (i === 2) {
            if (skinOcc >= 2) {
                tasks[time.toString()].push(skinProduct);
            }
        }
        if (i === 3) {
            if (smoothOcc >= 2) {
                smoothProduct !== "" &&
                    tasks[time.toString()].push(smoothProduct);
            }
            if (skinOcc >= 2) {
                tasks[time.toString()].push(skinProduct);
            }
        }
    }
    const schedule = new Schedule({
        user: id,
        tasks: tasks,
    });
    await schedule.save();

    return schedule;
}

module.exports = router;
