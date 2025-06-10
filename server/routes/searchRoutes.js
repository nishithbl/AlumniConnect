const express = require("express");
const searchController = require("../controllers/searchController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Search for alumni based on interests, skills, or company
router.get("/alumni", authMiddleware, searchController.searchAlumni);

// Search for past messages
router.get("/messages", authMiddleware, searchController.searchMessages);

// Search for users based on their name or profile details
router.get("/users", authMiddleware, searchController.searchUsers);

module.exports = router;
