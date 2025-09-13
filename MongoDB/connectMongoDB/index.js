const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ProductDB");
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Something wrong to  connect DB.");
    console.log(error);
  }
};

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  Description: String,
  Date: {
    type: Date,
    default: Date.now,
  },
});

const products = mongoose.model("products", productSchema);

app.get("/", (req, res) => {
  res.send(`<h1>Try to connect mongoDB</h1>`);
});

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDB();
});
