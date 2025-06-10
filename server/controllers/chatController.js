const Chat = require("../models/Chat");

// Get chat history
exports.getChatHistory = async (req, res) => {
  const { connectionId } = req.params;

  try {
    const chat = await Chat.find({ connectionId }).sort({ timestamp: 1 });
    res.status(200).json(chat);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching chat history", error: error.message });
  }
};

// Mark messages as read
exports.markAsRead = async (req, res) => {
  const { connectionId } = req.params;
  const userId = req.user.id; // Get the authenticated user's ID from the request object

  if (!connectionId) {
    return res.status(400).json({ message: "connectionId is required" });
  }

  try {
    // Ensure the user is part of the conversation (sender or receiver)
    const unreadMessages = await Chat.find({
      connectionId,
      read: false,
      $or: [{ sender: userId }, { receiver: userId }],
    });

    if (unreadMessages.length === 0) {
      return res
        .status(404)
        .json({ message: "No unread messages found for this conversation" });
    }

    // Mark the messages as read
    await Chat.updateMany(
      {
        connectionId,
        read: false,
        $or: [{ sender: userId }, { receiver: userId }],
      },
      { $set: { read: true } }
    );

    res.status(200).json({ message: "Messages marked as read" });
  } catch (error) {
    res.status(500).json({
      message: "Error marking messages as read",
      error: error.message,
    });
  }
};

// Send a message
exports.sendMessage = async (req, res) => {
  const { receiverId } = req.params; // receiverId is passed in the params
  const { message, connectionId } = req.body; // message and connectionId from the body

  // Ensure that connectionId is provided
  if (!connectionId) {
    return res.status(400).json({ message: "connectionId is required" });
  }

  try {
    const senderId = req.user.id; // Use the authenticated user's ID from req.user

    // Ensure the receiverId and message are provided
    if (!message || !receiverId) {
      return res
        .status(400)
        .json({ message: "Message and receiverId are required" });
    }

    const chat = new Chat({
      sender: senderId, // sender is now req.user.id (authenticated user)
      receiver: receiverId, // receiverId from the URL parameter
      message: message, // message from the body
      connectionId: connectionId, // connectionId from the body
    });

    await chat.save(); // Save the chat to the database
    res.status(201).json(chat); // Return the saved chat as a response
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending message", error: error.message });
  }
};

// Get conversation between authenticated user and another user
exports.getConversation = async (req, res) => {
  const senderId = req.user.id; // Get authenticated user's ID
  const { receiverId } = req.query; // Use query parameter for receiverId

  try {
    const chat = await Chat.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).sort({ timestamp: 1 });

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching conversation",
      error: error.message,
    });
  }
};

// Get all messages for the current user
exports.getAllMessages = async (req, res) => {
  const userId = req.user.id; // Get authenticated user's ID

  try {
    const chat = await Chat.find({
      $or: [{ sender: userId }, { receiver: userId }],
    }).sort({ timestamp: 1 });

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching messages",
      error: error.message,
    });
  }
};
