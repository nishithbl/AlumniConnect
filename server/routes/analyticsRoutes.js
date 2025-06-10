const express = require("express");
const analyticsController = require("../controllers/analyticsController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Get user analytics (e.g., profile views, message activity)
router.get("/user", authMiddleware, analyticsController.getUserAnalytics);

// Track a specific type of user activity (e.g., profile views, message sent, etc.)
router.post("/track", authMiddleware, analyticsController.trackActivity);

module.exports = router;