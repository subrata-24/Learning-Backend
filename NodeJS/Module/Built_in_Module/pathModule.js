const path = require("path");

//get filename of a path
const fileName = path.basename("/user/docs/file.txt");
console.log(fileName);

//get filename of a path without extension
const fileNameWithoutExt = path.basename("/user/docs/file.txt", ".txt");
console.log(fileNameWithoutExt);

//Get the directory name of the current module
console.log("Directory name: ", __dirname);

//Get the filename name with full directory of the current module
console.log("Directory name: ", __filename);

//Get the extension name of the path
console.log(path.extname("index.html"));
console.log(path.extname("index.coffee.md"));
console.log(path.extname("index."));
console.log(path.extname("index"));
console.log(path.extname(".index"));

//path join
const fullPath = path.join("/users", "docs", "file.txt");
console.log(fullPath);

//Handle relative path and navigation
console.log(
  path.join("/users", "directory", "../system", "./logs", "file.txt")
);

//Handle multiple slash.It normalize the slash
console.log(path.join("users", "//docs", "file.txt"));

//Path resolve
// Rules:
// If any argument starts with / → it resets the path from that root.
// If no absolute path is found → it assumes current working directory (process.cwd()).
// __dirname gives the directory of the current JS file, not the working directory.

//"file.txt" is relative, so Node joins it with process.cwd().
console.log(path.resolve("file.txt"));
console.log(path.resolve("./file.txt"));

//The first argument is absolute (/users), so everything before it is ignored.
// Node joins from there.
console.log(path.resolve("/users", "docs", "file.txt"));

// First /first (absolute) is ignored because the next segment is also absolute (/second).
// Resolution starts fresh from /second, then "third" is joined.
console.log(path.resolve("/first", "/second", "third"));

// __dirname gives the directory of the script file. Then "config" and "app.json" are joined.
console.log(path.resolve(__dirname, "config", "app.json"));

// Parse a file path
const pathInfo = path.parse("/users/docs/file.txt");
// Accessing parsed components
console.log("Directory:", pathInfo.dir); // /users/docs
console.log("Filename:", pathInfo.base); // file.txt
console.log("Name only:", pathInfo.name); // file
console.log("Extension:", pathInfo.ext); // .txt

//Read more form w3school
