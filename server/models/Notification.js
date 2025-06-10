const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user: {
      // Changed from userId to user for consistency
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Notification", notificationSchema);
