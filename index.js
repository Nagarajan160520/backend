const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");
const authRoute = require("./routes/authrouts.js");


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRoute);

// Routes
app.use("/api/products", productRoutes);

mongoose
  .connect("mongodb+srv://nagarajan16052001:NAGARAJAN2001@cluster0.jxnj3.mongodb.net/NODE-API")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.listen(3002, () => {
  console.log("Server started at port 3002");
});
