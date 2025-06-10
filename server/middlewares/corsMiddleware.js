const cors = require("cors");

const corsOptions = {
  origin: process.env.CLIENT_URL || "*", // Allow frontend to make requests from different origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = cors(corsOptions);
