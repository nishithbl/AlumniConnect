const Chat = require("../models/Chat");

const sendMessage = async (senderId, receiverId, message) => {
  try {
    const newMessage = new Chat({
      sender: senderId,
      receiver: receiverId,
      message,
      read: false,
    });

    await newMessage.save();

    return newMessage;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getConversation = async (userId, otherUserId) => {
  try {
    const conversation = await Chat.find({
      $or: [
        { sender: userId, receiver: otherUserId },
        { sender: otherUserId, receiver: userId },
      ],
    }).populate("sender receiver", "name email");

    return conversation;
  } catch (error) {
    throw new Error(error.message);
  }
};

const markMessageAsRead = async (messageId) => {
  try {
    const message = await Chat.findByIdAndUpdate(
      messageId,
      { read: true },
      { new: true }
    );
    if (!message) {
      throw new Error("Message not found");
    }
    return message;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { sendMessage, getConversation, markMessageAsRead };
