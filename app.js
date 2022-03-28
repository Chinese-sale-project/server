const mongoose = require("mongoose");
const express = require("express");
const routUser = require("./routes/user")
const app = express();
mongoose.connect("mongodb://localhost:27017/chaines-sale")
    .then(() => { console.log("mongo db connected"); })
    .catch(er => { console.log(er) });

app.use(express.json());
app.use("/user", routUser)
app.listen(4500, () => { console.log("waiting") })
