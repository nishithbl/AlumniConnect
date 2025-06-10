const express = require("express");
const connectionController = require("../controllers/connectionController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Send a connection request from student to alumnus
router.post(
  "/connect/:alumnusId",
  authMiddleware,
  connectionController.sendConnectionRequest
);

// View all connection requests for the current user (both sent and received)
router.get(
  "/requests",
  authMiddleware,
  connectionController.getConnectionRequests
);

// Accept or decline a connection request
router.patch(
  "/requests/:requestId",
  authMiddleware,
  connectionController.respondToConnectionRequest
);

module.exports = router;
