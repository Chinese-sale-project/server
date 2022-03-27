const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    userFirsName: { type: String, default: 'Unknown user' },
    userLastName: String,
    userPhone: { type: String, match: /[0-9]{9,11}/, required: true },
    arrOrders: [{
        type: mongoose.Types.ObjectId,
        ref: "users"
    }]
})
const User = mongoose.model("users", userSchema);
module.exports = { User ,userSchema}//אם צריך להוציא את הסכמה??
