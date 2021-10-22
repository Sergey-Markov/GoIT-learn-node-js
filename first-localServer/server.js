const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello Serg!!!");
});

server.listen(port, () => {
  console.log(`server ожидает соединения на порте ${port}`);
});
