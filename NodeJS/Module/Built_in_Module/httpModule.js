const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hii World!!");
});

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
