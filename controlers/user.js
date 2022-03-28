const {User} = require("../models/user.model");
const {Order} = require("../models/order")

module.exports.addUser = async (req, res) => {
  
    let newUser = req.body;
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

    let MyIdUser = req.query.id
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
    console.log(req)
    let newOrder = req.body;
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!${req.body}`) 
    let MyUser = await User.findOne({ "idUser": newOrder.idUser })
    if (MyUser) {
        MyUser.arrOrders.push(newOrder.arrOrders);
        console.log("good, old user")
        return res.send(MyUser)
    }
    else {
        console.log("new user!!!")
        this.addUser(newOrder);

    }
}