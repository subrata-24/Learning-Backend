const fs = require("fs");

fs.writeFile("demo1.txt", "This is a sample text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
