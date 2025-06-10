import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Registerbg from "../../assets/register.jpg";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // Default to student
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Simulate successful registration with API call
    console.log("Registering user:", formData);

    // Display success toast message
    toast.success("Registration successful!");

    // Mark the user as registered
    onRegister(); // Trigger the onRegister callback

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "student",
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${Registerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-end w-full max-w-screen-xl px-4">
        <div className="bg-blue-500 bg-opacity-70 p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-opacity-85 hover:border-blue-700 hover:border-2">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-white border placeholder-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-white border placeholder-white  border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-white border placeholder-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-white border placeholder-white  border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-white mb-2 block">Role</label>
              <div className="flex items-center space-x-2">
                <label
                  className={`cursor-pointer px-3 py-1.5 border rounded-lg text-sm ${
                    formData.role === "student"
                      ? "border-white text-white"
                      : "border-blue-950 text-blue-950"
                  } transition duration-300`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={formData.role === "student"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  Student
                </label>
                <label
                  className={`cursor-pointer px-3 py-1.5 border rounded-lg text-sm ${
                    formData.role === "alumni"
                      ? "border-white text-white"
                      : "border-blue-950 text-blue-950"
                  } transition duration-300`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="alumni"
                    checked={formData.role === "alumni"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  Alumni
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-transparent text-white border border-white py-2 px-4 rounded-md transition duration-300 hover:bg-gray-100 hover:bg-opacity-15 hover:text-white"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-white mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-white hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Register;
