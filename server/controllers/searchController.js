const User = require("../models/User");
const Chat = require("../models/Chat");

const searchAlumni = async (req, res) => {
  try {
    const { interests, skills, company, page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    let searchQuery = { role: "alumnus" };

    // Handle the interests filter if provided
    if (interests) {
      searchQuery.interests = { $in: interests.split(",") };
    }

    // Handle the skills filter if provided
    if (skills) {
      searchQuery.skills = { $in: skills.split(",") };
    }

    // Handle the company filter if provided
    if (company) {
      searchQuery.currentCompany = { $regex: company, $options: "i" };
    }

    // Fetch alumni data with pagination and filters
    const alumni = await User.find(searchQuery)
      .skip(skip)
      .limit(Number(limit))
      .select("name email currentCompany skills");

    // Send back the search results
    res.status(200).json(alumni);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while searching alumni" });
  }
};

const searchMessages = async (req, res) => {
  try {
    const { query, page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    // Search for messages that contain the provided query string
    const messages = await Chat.find({
      $or: [{ message: { $regex: query, $options: "i" } }],
    })
      .skip(skip)
      .limit(Number(limit))
      .populate("sender receiver", "name email");

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while searching messages" });
  }
};

const searchUsers = async (req, res) => {
  try {
    const { query, page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    // Search for users based on name, email, or skills
    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
        { skills: { $regex: query, $options: "i" } },
      ],
    })
      .skip(skip)
      .limit(Number(limit))
      .select("name email role skills");

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while searching users" });
  }
};

module.exports = { searchAlumni, searchMessages, searchUsers };