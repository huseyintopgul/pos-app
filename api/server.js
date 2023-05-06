const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");
const port = process.env.PORT || 6000;
require("dotenv").config();


// routes

const categoryRoute = require("./Routes/Categories.js");
const productRoute = require("./Routes/Products.js");
const invoiceRoute = require("./Routes/Invoices.js");
const userRoute = require("./Routes/Users.js");
const authRoute = require("./Routes/auth.js");


const app = express();


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB bağlantısı başarılı.");
  } catch (error) {
    throw error;
  }
};


// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/invoices", invoiceRoute);
app.use("/api/users",userRoute);
app.use("/api/auth", authRoute);



app.listen(port, () => {
  connect();
  console.log(` ${port} .port dinleniyor`);
});



module.exports = app;





