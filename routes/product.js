const router=require("express").Router();
const productController=require("../controlers/product");

router.get("",productController.selectAllProducts);
router.get("/:id",productController.selectProductById);
router.post("",productController.addProduct);
router.delete("/``byId``/:id",productController.deleteProductById);

module.exports=router
