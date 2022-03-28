const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema(
    {
        itemId: { type: String, minlength: 3 },
        itemName: String,
        itemDescription: String,
        itemPrice: Number

    }
)
const Order = mongoose.model("orsers", orderSchema);
module.exports = { Order, orderSchema }
