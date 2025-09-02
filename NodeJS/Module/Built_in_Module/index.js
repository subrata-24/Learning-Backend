const fs = require("fs");

fs.writeFile("demo1.txt", "My name is subrata.", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
