
const Products = require("../models/product.model")

module.exports.addProduct = async (req, res) => {
    let product = req.body;
    let p = new Products(product);
    try {
        await p.save()
        console.log(p)
        return res.send(p);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}

module.exports.deleteProduct = async (req, res) => {
    let productId = req.params.id;

    try {
        const p = await Products.findByIdAndRemove(productId);
        console.log(p);
        return res.send(p);
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.getAllProducts = async (req, res) => {
    let products = await Products.find({});
    return res.send(products)
}
module.exports.getProductById = async (req, res) => {
    let id = req.params.id;
    let products = await Products.find({ "product.id": id })
    return res.send(roducts)
}
