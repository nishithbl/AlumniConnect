const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Get user profile for the authenticated user
router.get("/me", authMiddleware, userController.getProfile);

// Update user profile for the authenticated user
router.put("/me", authMiddleware, userController.updateProfile);

// Search for alumni
router.get("/search", authMiddleware, userController.searchAlumni);

// Get specific alumni profile by ID
router.get("/alumni/:id", authMiddleware, userController.getAlumniById);

// Get specific user details by ID
router.get("/:id", authMiddleware, userController.getUserDetails);

module.exports = router;
