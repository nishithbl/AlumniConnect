const express = require("express");
const matchingController = require("../controllers/matchingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Get matching alumni for a student
router.get("/alumni", authMiddleware, matchingController.getMatchingAlumni);

module.exports = router;
