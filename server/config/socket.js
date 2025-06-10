const socketIO = require("socket.io");
const {
  handleTypingIndicator,
  handleReadReceipt,
  handleMessage,
} = require("../utils/socketHelpers");

const setupSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: process.env.CLIENT_URL || "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`New WebSocket connection: ${socket.id}`);

    // Handle events
    socket.on("sendMessage", (data) => handleMessage(socket, io, data));
    socket.on("typing", (data) => handleTypingIndicator(socket, io, data));
    socket.on("readReceipt", (data) => handleReadReceipt(socket, io, data));

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};

module.exports = setupSocket;
