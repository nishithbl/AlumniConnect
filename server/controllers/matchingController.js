const matchingService = require("../services/matchingService");

const getMatchingAlumni = async (req, res) => {
  try {
    const studentId = req.user.id; // Assuming the user is authenticated and the ID is passed from the JWT

    // Get the top matching alumni for the student
    const alumniMatches = await matchingService.getMatchingAlumni(studentId);

    res.status(200).json(alumniMatches); // Return the list of matching alumni
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching matching alumni" });
  }
};

module.exports = { getMatchingAlumni };
