const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "alumnus"],
      required: true,
    },
    interests: {
      type: [String], // Students can have an array of interests
      default: [],
    },
    currentCompany: {
      type: String,
      default: "",
    },
    skills: {
      type: [String], // Skills scraped from social profiles like LinkedIn
      default: [],
    },
    profileImage: {
      type: String,
    },
    connectionRequests: [
      {
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        status: {
          type: String,
          enum: ["pending", "accepted", "declined"],
          default: "pending",
        },
      },
    ],
  },
  { timestamps: true }
);

// Text index for search functionality
userSchema.index({ name: "text", skills: "text", currentCompany: "text" });

module.exports = mongoose.model("User", userSchema);
