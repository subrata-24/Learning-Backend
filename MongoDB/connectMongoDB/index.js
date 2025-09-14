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
  rating: {
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
      rating: req.body.rating,
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

app.delete("/products", async (req, res) => {
  try {
    // Delete by id
    // const id = req.query.id;
    // const productsInfo = await products.deleteOne({ _id: id });

    // Found by id(get the information) and delete the product
    const id = req.query.id;
    const productsInfo = await products.findByIdAndDelete({ _id: id });

    if (productsInfo) {
      res.status(200).send({
        success: true,
        message: "Deleted Successfullly",
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

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // If do not read the  info then use updateOne(),updateMany
    // If want to read the updated info then use {new:true}.By default it is false
    const productsInfo = await products.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          Description: req.body.Description,
          rating: req.body.rating,
        },
      },
      { new: true }
    );

    if (productsInfo) {
      res.status(200).send({
        success: true,
        message: "Updated Successfullly",
        data: productsInfo,
      });
    } else {
      res.send(404).send({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
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
