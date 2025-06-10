const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const cors = require("cors");
const connectDB = require("./config/db");
const jwtConfig = require("./config/jwtConfig");
const logger = require("./config/logger");
const initializeSocket = require("./config/socket");
const routes = require("./routes/router");

dotenv.config();

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Connect to MongoDB
connectDB();

// Socket.io setup
initializeSocket(server);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);
// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Alumni API");
});

app.use((err, req, res, next) => {
  logger.logError(err);
  res.status(500).send("Server Error");
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  logger.logInfo(`Server is running on port ${PORT}`);
});
