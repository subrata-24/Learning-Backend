const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.status(200).send(`<h1>For testing file upload.</h1>`);
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", upload.single("image"), function (req, res, next) {
  res.status(201).send(`<h1>File uploaded successfully</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
