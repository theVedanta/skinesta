const router = require("express").Router();
const Product = require("../models/Product");

router.post("/create", async (req, res) => {
    const { price, name, desc } = req.body;
    await new Product({ price, name, desc }).save();

    res.json({ done: true });
});
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;
