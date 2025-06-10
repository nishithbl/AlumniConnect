const User = require("../models/User");

const getUserProfile = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUserProfile = async (userId, profileData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, profileData, {
      new: true,
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const searchAlumni = async (filters) => {
  try {
    const { interests, skills, company } = filters;

    let searchQuery = {};
    if (interests) {
      searchQuery.interests = { $in: interests.split(",") };
    }
    if (skills) {
      searchQuery.skills = { $in: skills.split(",") };
    }
    if (company) {
      searchQuery.currentCompany = { $regex: company, $options: "i" };
    }

    // Search for alumni who match the filters
    const alumni = await User.find({ ...searchQuery, role: "alumnus" });
    return alumni;
  } catch (error) {
    throw new Error(error.message);
  }
};

const searchUsers = async (query) => {
  try {
    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } },
        { skills: { $regex: query, $options: "i" } },
      ],
    });
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  searchAlumni,
  searchUsers,
};
