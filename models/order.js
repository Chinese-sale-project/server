const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
    itemId: { type: String, minlength: 3, required: true },
    itemName: String,
    itemDescription: String,
    itemPrice: Number

})
//const Order=mongoose.model("orsers",orderSchema);//נראה לי שלא צריך מה זה באמת מודל  ??
module.exports = orderSchema