const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const products = mongoose.model("products", productSchema);

app.get("/", (req, res) => {
  res.send(`<h1>Try to connect mongoDB</h1>`);
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new products({
      name: req.body.name,
      price: req.body.price,
      Description: req.body.Description,
    });

    await newProduct.save();

    res.status(201).send({
      newProduct,
    });
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDB();
});
