import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loginbg from '../../assets/login.jpg';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login process
    console.log("Logging in with", { email, password, role });

    // Display success message
    toast.success(`Logged in successfully as ${role}!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className:"bg-blue-500 text-white ",
    });

    // Trigger the onLogin callback
    onLogin(role);

    // Navigate based on the selected role
    setTimeout(() => {
      if (role === "student") {
        navigate("/studenthome");
      } else {
        navigate("/alumnihome");
      }
    }, 3000); // Add delay to show the toast before navigation
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Loginbg})` }}
    >
      <ToastContainer />
      <div className="flex justify-end w-full max-w-screen-xl px-4">
        <div className="bg-blue-500 bg-opacity-60 p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="text-white">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-3 bg-transparent text-white border border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="text-white">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-3 bg-transparent text-white border placeholder-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role Selection */}
            <div className="mb-4">
              <label className="text-white mb-2 block">Role</label>
              <div className="flex items-center space-x-4">
                <label
                  className={`cursor-pointer px-3 py-1.5 border rounded-lg text-sm ${
                    role === "student"
                      ? "border-white text-white"
                      : "border-blue-500 text-blue-500"
                  } transition duration-300`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={role === "student"}
                    onChange={(e) => setRole(e.target.value)}
                    className="hidden"
                  />
                  Student
                </label>
                <label
                  className={`cursor-pointer px-3 py-1.5 border rounded-lg text-sm ${
                    role === "alumni"
                      ? "border-white text-white"
                      : "border-blue-500 text-blue-500"
                  } transition duration-300`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="alumni"
                    checked={role === "alumni"}
                    onChange={(e) => setRole(e.target.value)}
                    className="hidden"
                  />
                  Alumni
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-transparent text-white border border-white py-2 px-4 rounded-md transition duration-300 hover:bg-white hover:bg-opacity-20"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
