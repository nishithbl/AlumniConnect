const express = require("express");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const connectionRoutes = require("./connectionRoutes");
const chatRoutes = require("./chatRoutes");
const analyticsRoutes = require("./analyticsRoutes");
const notificationRoutes = require("./notificationRoutes");
const searchRoutes = require("./searchRoutes");
const scrapingRoutes = require("./scrapingRoutes");
const matchingRoutes = require("./matchingRoutes");

const router = express.Router();

// Auth routes
router.use("/auth", authRoutes);

// User routes
router.use("/users", userRoutes);

// Connection routes
router.use("/connections", connectionRoutes);

// Chat routes
router.use("/chats", chatRoutes);

// Analytics routes (optional)
router.use("/analytics", analyticsRoutes);

// Notification routes (optional)
router.use("/notifications", notificationRoutes);

// Search routes (optional)
router.use("/search", searchRoutes);

// Scraping routes (optional)
router.use("/scraping", scrapingRoutes);

// Matching routes (optional)
router.use("/matching", matchingRoutes);

module.exports = router;
