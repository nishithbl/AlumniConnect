// notificationController.js
const Notification = require("../models/Notification");

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markAsRead = async (req, res) => {
  const { notificationId } = req.params;
  try {
    const notification = await Notification.findById(notificationId);
    if (notification) {
      notification.read = true;
      await notification.save();
      res.status(200).json({ message: "Notification marked as read" });
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.clearNotifications = async (req, res) => {
  try {
    await Notification.deleteMany({ user: req.user._id });
    res.status(200).json({ message: "Notifications cleared" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a notification
exports.createNotification = async (req, res) => {
  const { message, userId } = req.body;

  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }

  try {
    const newNotification = new Notification({
      user: userId,
      message: message,
    });

    await newNotification.save();
    res.status(201).json(newNotification); // Return the newly created notification
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating notification", error: error.message });
  }
};
