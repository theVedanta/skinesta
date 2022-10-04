const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
