const User = require("../models/user").User
const Orser = require("../models/order").Orser
module.exports.addUser = async (req, res) => {
    let newUser = req.boody;
    let addnewUser = new User(newUser)
    try {
        await addnewUser.save();
        console.log(addnewUser);
        return res.send(addnewUser);

    }
    catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
}
module.exports.getAllOrdersByUserId = async (req, res) => {
    let MyIdUser = req.params.idUser
    //if(a=="")
    // a="there aren't orders";
    try {
        let allOrders = await User.findById(MyIdUser)
        //אפשר פה לעשות בשורה למעה .arrOrders
        allOrders = allOrders.arrOrders
        console.log(allOrders)
        return res.send(allOrders)
    }
    catch (e) {
        e = "There is no such user"
        console.log(e)
        return res.status(400).send(e)
    }
}
module.exports.addOrdertoUser = async (req, res) => {
    let newOrder = req.boody;
    let MyUser = await User.findOne({ "idUser": newOrder.idUser })
    if (MyUser) {
        MyUser.arrOrders.push(newOrder.arrOrders);
        console.log("good, old user")
    }
    else {
        console.log("new user!!!")
        this.addUser(newOrder);

    }

}