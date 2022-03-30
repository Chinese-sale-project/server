const router = require("express").Router();
const productController = require("../controlers/products");

router.get("", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("", productController.addProduct);
router.delete("/byiden/:id", productController.deleteProduct);

module.exports =router