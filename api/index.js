const express = require("express");
const app= express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
const cors = require("cors");
const userRoute = require("./Routers/user");
const authRoute = require("./Routers/auth");
const productRoute = require("./Routers/product");
const cartRoute = require("./Routers/cart");
const orderRoute = require("./Routers/order");
const stripeRoute = require("./Routers/stripe");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1/shop")
.then(() => {
    console.log("DB connection successfull");
}).catch((e) => {
    console.log(e);
})

app.use(express.json());
app.use("/api/auth",cors(),authRoute);
app.use("/api/users",cors(),userRoute);
app.use("/api/products",cors(),productRoute);
app.use("/api/carts",cors(),cartRoute);
app.use("/api/orders",cors(),orderRoute);
app.use("/api/checkout",cors(),stripeRoute);
 
app.use(cors())

app.listen(5000, () => {
    console.log("Backend Server Is Running")
})