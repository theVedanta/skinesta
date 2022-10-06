const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    authToken: {
        type: String,
    },
    pfp: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    cart: Array,
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
