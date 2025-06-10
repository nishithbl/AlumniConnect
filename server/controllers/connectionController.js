const Connection = require("../models/Connection");

// Send connection request
exports.sendConnectionRequest = async (req, res) => {
  const { studentId, alumnusId } = req.body;

  try {
    const connection = await Connection.create({
      studentId,
      alumnusId,
      status: "pending",
    });

    res.status(201).json({ message: "Connection request sent", connection });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error sending connection request",
        error: error.message,
      });
  }
};

// Respond to connection request
exports.respondToConnectionRequest = async (req, res) => {
  const { requestId } = req.params;
  const { status } = req.body; // "accepted" or "declined"

  try {
    const updatedConnection = await Connection.findByIdAndUpdate(
      requestId,
      { status },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Request updated successfully", updatedConnection });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating connection request",
        error: error.message,
      });
  }
};

// Get connection request

exports.getConnectionRequests = async (req, res) => {
  const { userId } = req.params;

  try {
    const requests = await Connection.find({
      $or: [{ studentId: userId }, { alumnusId: userId }],
    });

    res.status(200).json({ requests });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching connection requests",
        error: error.message,
      });
  }
};
