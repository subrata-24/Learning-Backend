const fs = require("fs");

// fs.writeFile("demo1.txt", "My name is subrata.", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//   }
// });

// fs.appendFile("demo1.txt", "My age is 25 years old", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful");
//   }
// });

// fs.readFile("demo1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("demo1.txt", "demo2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfull");
//   }
// });

// fs.unlink("demo2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfull");
//   }
// });

// fs.exists("demo2.txt", (result) => {
//   if (result) {
//     console.log("File exist.");
//   } else {
//     console.log("Can not found the file");
//   }
// });

const res = fs.existsSync("demo2.txt");

console.log(res);
