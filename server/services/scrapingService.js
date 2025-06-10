const https = require("https");
const dotenv = require("dotenv");
dotenv.config();

const scrapeLinkedInProfile = async (linkedinUrl) => {
  const username = linkedinUrl.split("/in/")[1];
  const options = {
    method: "GET",
    hostname: process.env.RAPIDAPI_HOST,
    path: `/?username=${username}`,
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const parsedData = JSON.parse(data);

          // Safely extract companies, skills, and certifications, if available
          const companies = parsedData.position
            ? parsedData.position.map((item) => ({
                companyName: item.companyName || "Not Available",
                title: item.title || "Not Available",
              }))
            : null;

          const skills = parsedData.skills
            ? parsedData.skills.map((skill) => skill.name || "Not Available")
            : null;

          const certifications = parsedData.certifications
            ? parsedData.certifications.map(
                (cert) => cert.name || "Not Available"
              )
            : null;

          // Returning only the required information, set null if data is absent
          resolve({
            companies: companies || null,
            skills: skills || null,
            certifications: certifications || null,
          });
        } catch (error) {
          reject("Error parsing response data");
        }
      });
    });

    req.on("error", (error) => {
      reject("Error scraping LinkedIn profile: " + error.message);
    });

    req.end();
  });
};

module.exports = { scrapeLinkedInProfile };
