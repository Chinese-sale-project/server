const mongoose = require("mongoose");
const express = require("express");
const productRout = require("../server/routes/product");

const app=express();

mongoose.connect("mongodb://localhost:27017/chinese-sale")
.then(console.log("mongodb connected"))
.catch(err=>{console.log(err)});

app.use(express.json())
app.use("/product",productRout)
app.listen(4500,()=>{console.log("waiting.....")})
