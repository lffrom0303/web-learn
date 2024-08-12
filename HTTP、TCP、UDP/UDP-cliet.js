const dgram = require("dgram");

// 创建 UDP 客户端
const client = dgram.createSocket("udp4");
// 发送数据到 UDP 服务器
client.send(Buffer.from("Hello from UDP client"), 41234, "localhost", (err) => {
  if (err) {
    console.error("发送消息时发生错误:", err);
  } else {
    console.log("消息已发送到 UDP 服务器");
  }
});

// 监听来自 UDP 服务器的响应
client.on("message", (msg, rinfo) => {
  console.log(
    `收到来自 UDP 服务器 ${rinfo.address}:${rinfo.port} 的消息: ${msg}`
  );
  client.close();
});

// 处理错误
client.on("error", (err) => {
  console.error("UDP 客户端错误:", err);
});
