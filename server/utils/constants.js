// Response messages
const SUCCESS = "Success";
const ERROR = "Error";
const NOT_FOUND = "Resource not found";
const INVALID_CREDENTIALS = "Invalid credentials";
const UNAUTHORIZED = "Unauthorized access";

// JWT Token Expiry Time
const JWT_EXPIRY = "1h"; // 1 hour

// Roles
const ROLES = {
  STUDENT: "student",
  ALUMNUS: "alumnus",
  ADMIN: "admin",
};

// Connection Request Status
const CONNECTION_STATUS = {
  PENDING: "pending",
  ACCEPTED: "accepted",
  DECLINED: "declined",
};

module.exports = {
  SUCCESS,
  ERROR,
  NOT_FOUND,
  INVALID_CREDENTIALS,
  UNAUTHORIZED,
  JWT_EXPIRY,
  ROLES,
  CONNECTION_STATUS,
};
