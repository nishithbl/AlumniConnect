const Joi = require("joi");

// User Registration Validation Schema
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    interests: Joi.array().items(Joi.string()).optional(),
    skills: Joi.array().items(Joi.string()).optional(),
    currentCompany: Joi.string().optional(),
    role: Joi.string().valid("student", "alumnus").required(),
  });
  return schema.validate(data);
};

// User Login Validation Schema
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// Password Reset Validation Schema
const resetPasswordValidation = (data) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  });
  return schema.validate(data);
};

// Profile Update Validation Schema
const updateProfileValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).optional(),
    email: Joi.string().email().optional(),
    interests: Joi.array().items(Joi.string()).optional(),
    skills: Joi.array().items(Joi.string()).optional(),
    currentCompany: Joi.string().optional(),
  });
  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
  resetPasswordValidation,
  updateProfileValidation,
};
