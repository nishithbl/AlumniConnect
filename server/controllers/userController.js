const User = require("../models/User");

// Get the profile of the authenticated user
exports.getProfile = async (req, res) => {
  const { id } = req.user; // Get user ID from the authenticated user

  try {
    const user = await User.findById(id).select("-password"); // Exclude password field
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user); // Return the user's profile
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user profile", error: error.message });
  }
};

// Update the authenticated user's profile
exports.updateProfile = async (req, res) => {
  const { id } = req.user; // Get the authenticated user's ID from req.user
  const updates = req.body; // Get the data to update from the request body

  try {
    // Update the user's profile using their authenticated ID
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    }).select("-password"); // Exclude the password from the response

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully", updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};

// Search for alumni based on various criteria
exports.searchAlumni = async (req, res) => {
  const { query, interests, skills, company } = req.query;

  try {
    const alumni = await User.find({
      role: "alumnus",
      $or: [
        { name: { $regex: query, $options: "i" } },
        { interests: { $regex: interests, $options: "i" } },
        { skills: { $regex: skills, $options: "i" } },
        { company: { $regex: company, $options: "i" } },
      ],
    }).select("-password"); // Exclude password from response

    res.status(200).json(alumni);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching alumni", error: error.message });
  }
};

// Get alumni by their ID
exports.getAlumniById = async (req, res) => {
  const { id } = req.params;

  try {
    const alumni = await User.findById(id).select("-password");
    if (!alumni) return res.status(404).json({ message: "Alumnus not found" });

    res.status(200).json(alumni); // Return the alumni profile
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching alumni", error: error.message });
  }
};

// Get specific user details by their ID (for admin or self-management)
exports.getUserDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user); // Return the user details
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user details", error: error.message });
  }
};
