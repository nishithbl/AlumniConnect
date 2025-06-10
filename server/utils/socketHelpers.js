const socketIO = require("socket.io");

// Function to initialize the Socket server
const initSocketServer = (server) => {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("New socket connection: " + socket.id);

    // Emit a welcome message to the newly connected socket
    socket.emit("welcome", { message: "Welcome to the chat!" });

    // Handle incoming messages
    socket.on("sendMessage", (data) => {
      // Broadcast the message to all other users (except the sender)
      socket.broadcast.emit("newMessage", {
        senderId: data.senderId,
        message: data.message,
        timestamp: new Date(),
      });
    });

    // Handle disconnect event
    socket.on("disconnect", () => {
      console.log("Socket disconnected: " + socket.id);
    });
  });

  return io;
};

// Function to send a direct message to a user (by socket ID)
const sendDirectMessage = (io, receiverSocketId, message) => {
  io.to(receiverSocketId).emit("newMessage", { message });
};

// Function to broadcast a message to all connected clients
const broadcastMessage = (io, message) => {
  io.emit("broadcastMessage", { message });
};

module.exports = { initSocketServer, sendDirectMessage, broadcastMessage };
