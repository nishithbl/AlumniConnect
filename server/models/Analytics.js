const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["profile_views", "chat_engagement"], // The activity types allowed
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referencing the User collection
      required: true,
    },
    count: {
      type: Number,
      default: 0, // Default count for each activity, initially set to 0
    },
    timestamp: {
      type: Date,
      default: Date.now, // Timestamp of when the activity was logged
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Analytics", analyticsSchema);
