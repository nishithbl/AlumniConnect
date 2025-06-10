const express = require("express");
const notificationController = require("../controllers/notificationController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Get all notifications for the current user
router.get("/", authMiddleware, notificationController.getNotifications);

// Mark a notification as read
router.patch(
  "/:notificationId",
  authMiddleware,
  notificationController.markAsRead
);

// Clear all notifications
router.delete("/", authMiddleware, notificationController.clearNotifications);

// Create a notification (added this route)
router.post(
  "/create",
  authMiddleware,
  notificationController.createNotification
);

module.exports = router;
