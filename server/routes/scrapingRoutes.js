const express = require("express");
const scrapingController = require("../controllers/scrapingController");
const authMiddleware = require("../middlewares/authMiddleware"); // Optional, depends on whether you want authentication for scraping

const router = express.Router();

// Scrape LinkedIn profile
router.post("/linkedin", authMiddleware, scrapingController.scrapeLinkedIn);

module.exports = router;