const http = require("http");

// 创建一个 HTTP 请求选项
const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

// 发送 HTTP 请求到服务器
const req = http.request(options, (res) => {
  console.log(`HTTP 响应状态码: ${res.statusCode}`);

  res.on("data", (chunk) => {
    console.log("收到来自 HTTP 服务器的消息:", chunk.toString());
  });

  res.on("end", () => {
    console.log("HTTP 响应已结束");
  });
});

// 处理请求错误
req.on("error", (err) => {
  console.error("HTTP 客户端错误:", err);
});

// 结束请求（表示没有更多的数据要发送）
req.end();
