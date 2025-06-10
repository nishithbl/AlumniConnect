const Analytics = require("../models/Analytics");
const User = require("../models/User");

// Get user analytics
exports.getUserAnalytics = async (req, res) => {
  const { id } = req.user; // Access the user's ID from req.user

  try {
    // Fetch analytics data for the specific user
    const data = await Analytics.find({ userId: id });

    if (!data || data.length === 0) {
      return res
        .status(404)
        .json({ message: "No analytics data found for this user" });
    }

    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user analytics", error: error.message });
  }
};

// Track activity (e.g., profile views, message engagement)
exports.trackActivity = async (req, res) => {
  const { userId, type } = req.body;

  try {
    // First, check if the user exists in the User collection
    const userExists = await User.findById(userId);

    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if an analytics record already exists for this user and activity type
    const existingData = await Analytics.findOne({ userId, type });

    if (existingData) {
      // If the record exists, increment the count
      existingData.count += 1;
      await existingData.save(); // Save the updated record
      res.status(200).json(existingData); // Return the updated record
    } else {
      // If no record exists, create a new one
      const newData = new Analytics({ userId, type });
      newData.count = 1;
      await newData.save(); // Save the new record
      res.status(201).json(newData); // Return the newly created record
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error tracking activity", error: error.message });
  }
};
