const net = require("net");
// 创建一个 TCP 服务器
const server = net.createServer((socket) => {
  console.log("客户端已连接");
  // 监听客户端发送的数据
  socket.on("data", (data) => {
    console.log("收到数据:", data.toString());
    // 直接返回收到的数据，模拟简单的回显服务器
    socket.write(`服务器回显: ${data}`);
  });
  // 处理连接关闭
  socket.on("end", () => {
    console.log("客户端已断开连接");
  });
});

// 服务器监听指定端口
server.listen(8080, () => {
  console.log("TCP 服务器正在监听端口 8080");
});
