const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" });
  res.write("<h1>Hello World!!</h1>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
