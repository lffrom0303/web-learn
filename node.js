let http = require("http");
let fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("call.js", (err, data) => {
      res.end(Buffer.from(data, "utf8").toString());
    });
  })
  .listen(8000);
