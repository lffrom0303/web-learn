const http = require("http");

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
  console.log("收到请求:");
  console.log(`方法: ${req.method}, URL: ${req.url}`);

  // 设置响应头
  res.writeHead(500, { "Content-Type": "application/json" });

  // 发送响应
  res.end("Hello from HTTP server");
});

// 服务器监听指定端口
server.listen(3000, () => {
  console.log("HTTP 服务器正在监听端口 3000");
});
