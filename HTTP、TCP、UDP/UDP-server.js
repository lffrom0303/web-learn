const dgram = require("dgram");

// 创建一个 UDP 服务器
const server = dgram.createSocket("udp4");

// 监听接收到的数据
server.on("message", (msg, rinfo) => {
  console.log(`服务器收到来自 ${rinfo.address}:${rinfo.port} 的消息: ${msg}`);

  // 发送回执消息给客户端
  server.send("Hello from UDP server", rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.error("发送回执消息时发生错误:", err);
    } else {
      console.log("回执消息已发送");
    }
  });
});

// 服务器绑定到指定端口
server.bind(41234, () => {
  console.log("UDP 服务器正在监听端口 41234");
});
