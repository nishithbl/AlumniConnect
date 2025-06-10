const User = require("../models/User");
const Connection = require("../models/Connection");

const sendConnectionRequest = async (studentId, alumnusId) => {
  try {
    const student = await User.findById(studentId);
    const alumnus = await User.findById(alumnusId);

    if (!student || !alumnus) {
      throw new Error("User not found");
    }

    const connectionRequest = new Connection({
      sender: studentId,
      receiver: alumnusId,
      status: "pending",
    });

    await connectionRequest.save();

    return connectionRequest;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getConnectionRequests = async (userId) => {
  try {
    const requests = await Connection.find({
      $or: [{ sender: userId }, { receiver: userId }],
    }).populate("sender receiver", "name email");

    return requests;
  } catch (error) {
    throw new Error(error.message);
  }
};

const respondToConnectionRequest = async (requestId, response) => {
  try {
    const connectionRequest = await Connection.findById(requestId);
    if (!connectionRequest) {
      throw new Error("Connection request not found");
    }

    if (response === "accept") {
      connectionRequest.status = "accepted";
    } else if (response === "decline") {
      connectionRequest.status = "declined";
    } else {
      throw new Error("Invalid response");
    }

    await connectionRequest.save();

    return connectionRequest;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  sendConnectionRequest,
  getConnectionRequests,
  respondToConnectionRequest,
};
