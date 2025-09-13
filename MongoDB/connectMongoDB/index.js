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

    await newProduct.save(newProduct);
    res.status(201).send({
      message: "Product stored successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.get("/products", async (req, res) => {
  try {
    // equal 2000
    // const productsInfo = await products.find({ price: { $eq: 2000 } });

    // not equal 2000
    // const productsInfo = await products.find({ price: { $ne: 2000 } });

    // greater than 500
    // const productsInfo = await products.find({ price: { $gt: 500 } });

    // greater equal 2000
    // const productsInfo = await products.find({ price: { $gte: 2000 } });

    // less than 2000
    // const productsInfo = await products.find({ price: { $lt: 2000 } });

    // less equal 2000
    // const productsInfo = await products.find({ price: { $lte: 2000 } });

    // shows the documents that present in this array
    // const productsInfo = await products.find({ price: { $in: [300, 2000] } });

    // shows the documents that is not present in this array
    // const productsInfo = await products.find({ price: { $nin: [300, 2000] } });

    const price = req.query.price;
    const productsInfo = await products.find({ price: { $lt: price } });

    if (productsInfo) {
      res.status(200).send({
        success: true,
        message: "Found products",
        data: productsInfo,
      });
    } else {
      res.send(404).send({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {}
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productsInfo = await products.find({ _id: id });
    if (productsInfo) {
      res.status(200).send({
        success: true,
        message: "Found product",
        data: productsInfo,
      });
    } else {
      res.send(404).send({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {}
});

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDB();
});
