// file: index.js
const http = require("node:http");

const PORT = 5255;

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(PORT, () => {
  console.log(`Server is listening at :${PORT}`);
});
