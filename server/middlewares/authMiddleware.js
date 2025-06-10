const { verifyToken } = require("../config/jwtConfig");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authorization token required" });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  try {
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // Attach user info to request object
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error authenticating user", error: error.message });
  }
};

module.exports = authMiddleware;
