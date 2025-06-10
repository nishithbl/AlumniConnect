import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";

const Settings = () => {
  // State to store the current values of username and email
  const [username, setUsername] = useState("John Doe"); // Default username
  const [email, setEmail] = useState("johndoe@example.com"); // Default email
  const [additionalEmail, setAdditionalEmail] = useState(""); // For additional email
  const [isConnected, setIsConnected] = useState({
    facebook: false,
    github: false,
    linkedin: false,
  });

  // Handlers for form inputs
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAdditionalEmailChange = (e) => {
    setAdditionalEmail(e.target.value);
  };

  const handleConnectAccount = (platform) => {
    setIsConnected((prev) => ({ ...prev, [platform]: !prev[platform] }));
  };

  const handleDeleteAccount = () => {
    // Logic to delete the account
    alert("Account deleted!");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        {/* Edit Username */}
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Edit Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Add Another Email */}
        <div className="mb-6">
          <label
            htmlFor="additionalEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Add Another Email
          </label>
          <input
            type="email"
            id="additionalEmail"
            value={additionalEmail}
            onChange={handleAdditionalEmailChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="anotheremail@example.com"
          />
        </div>

        {/* Connected Accounts */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Connected Accounts</h2>

          <div className="flex space-x-6">
            <div
              className={`flex items-center space-x-2 cursor-pointer ${isConnected.facebook ? "text-blue-600" : "text-gray-500"}`}
              onClick={() => handleConnectAccount("facebook")}
            >
              <FaFacebook className="text-2xl" />
              <span>{isConnected.facebook ? "Disconnect" : "Connect"} Facebook</span>
            </div>

            <div
              className={`flex items-center space-x-2 cursor-pointer ${isConnected.github ? "text-black" : "text-gray-500"}`}
              onClick={() => handleConnectAccount("github")}
            >
              <FaGithub className="text-2xl" />
              <span>{isConnected.github ? "Disconnect" : "Connect"} GitHub</span>
            </div>

            <div
              className={`flex items-center space-x-2 cursor-pointer ${isConnected.linkedin ? "text-blue-700" : "text-gray-500"}`}
              onClick={() => handleConnectAccount("linkedin")}
            >
              <FaLinkedin className="text-2xl" />
              <span>{isConnected.linkedin ? "Disconnect" : "Connect"} LinkedIn</span>
            </div>
          </div>
        </div>

        {/* Delete Account */}
        <div>
          <button
            onClick={handleDeleteAccount}
            className="w-full mt-6 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            <Link to={"/"}>
            Delete Account
            </Link>
          </button>
          <p className="mt-2 text-sm text-gray-500">
            Once your account is deleted, it cannot be undone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
