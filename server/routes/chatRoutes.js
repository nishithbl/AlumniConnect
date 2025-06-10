const express = require("express");
const chatController = require("../controllers/chatController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Send a message from one user to another
router.post("/send/:receiverId", authMiddleware, chatController.sendMessage);

// Changed this to use authenticated user's ID (sender) and another user's ID (receiver)
router.get("/conversation", authMiddleware, chatController.getConversation);

// Changed the route to work with authenticated user's ID
router.get("/messages", authMiddleware, chatController.getAllMessages);

// Mark a message as read
router.patch("/read/:connectionId", authMiddleware, chatController.markAsRead);

module.exports = router;
