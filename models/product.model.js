const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    item_name: { type: String, required: true, match: /^[a-zA-Z0-9]{3,}$/ },
    item_description: { type: String, required: true },
    price: { type: Number, min: 5, max: 100000 }
});

const Product = mongoose.model("products", productSchema);
module.exports = Product

