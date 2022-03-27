const router = require("express").Router();
const userController = require("../controlers/user");
router.post("", userController.addUser);
router.get("/byId/:id", userController.getAllOrdersByUserId);
router.post("", userController.addOrdertoUser);
module.exports = router;

