const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: { type: String, required: true },
    connectionId: { type: String, required: true }, // Unique ID to represent the connection between users
    timestamp: { type: Date, default: Date.now },
    read: { type: Boolean, default: false }, // Whether the message has been read
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
