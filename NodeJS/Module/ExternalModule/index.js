const randomFruiteName = require("random-fruits-name");

console.log(randomFruiteName("nl"));

const moviesNames = require("movies-names");

console.log(moviesNames.random(3));

const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end("Hello Subrata Biswas!!");
});

server.listen(PORT, "localhost", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
