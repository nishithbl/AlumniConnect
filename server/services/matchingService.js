const User = require("../models/User");
const _ = require("lodash");

const getMatchingAlumni = async (studentId) => {
  try {
    // Fetch the student's profile
    const student = await User.findById(studentId).select(
      "skills interests currentCompany"
    );

    if (!student) {
      throw new Error("Student not found");
    }

    // Fetch alumni with selected fields to optimize performance
    const alumni = await User.find({ role: "alumnus" }).select(
      "skills interests currentCompany"
    );

    // Create a matching score based on skills, interests, and company
    const matches = alumni.map((alumnus) => {
      let score = 0;

      // Match on shared interests
      if (
        student.interests &&
        alumnus.interests &&
        _.intersection(student.interests, alumnus.interests).length > 0
      ) {
        score += 1;
      }

      // Match on shared skills
      if (
        student.skills &&
        alumnus.skills &&
        _.intersection(student.skills, alumnus.skills).length > 0
      ) {
        score += 2; // Skills might weigh more
      }

      // Match on current company
      if (
        student.currentCompany &&
        alumnus.currentCompany &&
        student.currentCompany === alumnus.currentCompany
      ) {
        score += 1;
      }

      return { alumnus, score };
    });

    // Sort alumni by the highest match score
    const sortedMatches = matches.sort((a, b) => b.score - a.score);

    // Return top matching alumni (e.g., top 5)
    return sortedMatches.slice(0, 5).map((match) => match.alumnus);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getMatchingAlumni };
