const { body, query, check,validationResult } = require("express-validator");

const validateSearchQuery = [
  query("query")
    .optional()
    .isString()
    .withMessage("Search query must be a string"),
  query("interests")
    .optional()
    .isString()
    .withMessage("Interests must be a comma-separated string"),
  query("skills")
    .optional()
    .isString()
    .withMessage("Skills must be a comma-separated string"),
  query("company")
    .optional()
    .isString()
    .withMessage("Company must be a string"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Validation rules for user registration
const validateRegister = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),

  check("email").isEmail().withMessage("Invalid email address"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  check("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match"),

  validateRequest, // Call the validateRequest function to handle validation results
];

// Validation rules for user login
const validateLogin = [
  check("email").isEmail().withMessage("Invalid email address"),

  check("password").notEmpty().withMessage("Password is required"),

  validateRequest, // Call the validateRequest function to handle validation results
];

module.exports = {
  validateRegister,
  validateLogin,
  validateRequest,
  validateSearchQuery,
};
