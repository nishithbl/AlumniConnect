const express = require("express");
const authController = require("../controllers/authController");
const {
  validateRegister,
  validateLogin,
  validateRequest,
} = require("../middlewares/validationMiddleware");

const router = express.Router();

// User Registration (for both student and alumnus)
router.post(
  "/register",
  validateRegister,
  validateRequest,
  authController.register
);

// User Login
router.post("/login", validateLogin, validateRequest, authController.login);

module.exports = router;
