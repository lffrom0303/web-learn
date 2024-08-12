const net = require("net");

// 创建 TCP 客户端并连接到服务器
const client = net.createConnection({ port: 8080 }, () => {
  console.log("已连接到 TCP 服务器");

  // 发送消息到服务器
  client.write("Hello from TCP client");
});

// 监听来自服务器的响应
client.on("data", (data) => {
  console.log("收到来自 TCP 服务器的消息:", data.toString());
  client.end(); // 关闭连接
});

// 处理连接关闭
client.on("end", () => {
  console.log("与 TCP 服务器的连接已关闭");
});

// 处理错误
client.on("error", (err) => {
  console.error("TCP 客户端错误:", err);
});
