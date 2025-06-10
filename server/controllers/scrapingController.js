const scrapingService = require("../services/scrapingService");

const scrapeLinkedIn = async (req, res) => {
  try {
    const { linkedinUrl } = req.body;

    if (!linkedinUrl) {
      return res.status(400).json({ message: "LinkedIn URL is required" });
    }

    // Validate LinkedIn URL format
    const linkedinPattern =
      /^(https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+)$/;
    if (!linkedinPattern.test(linkedinUrl)) {
      return res.status(400).json({ message: "Invalid LinkedIn URL format" });
    }

    console.log("Scraping LinkedIn profile:", linkedinUrl); // Debug log

    // Call the scraping service
    const profileData = await scrapingService.scrapeLinkedInProfile(
      linkedinUrl
    );

    if (profileData) {
      return res.status(200).json(profileData);
    } else {
      return res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    console.error("Error scraping LinkedIn:", error.message); // Debug log
    return res.status(500).json({
      message: "Error scraping LinkedIn profile",
      error: error.message,
    });
  }
};

exports.scrapeLinkedIn = scrapeLinkedIn;