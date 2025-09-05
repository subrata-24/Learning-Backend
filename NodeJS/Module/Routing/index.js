const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const handleClientRequest = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleClientRequest(200, "./View/Home.html");
  } else if (req.url === "/about") {
    handleClientRequest(200, "./View/About.html");
  } else if (req.url === "/contact") {
    handleClientRequest(200, "./View/Contact.html");
  } else {
    handleClientRequest(404, "./View/error.html");
  }
});

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
