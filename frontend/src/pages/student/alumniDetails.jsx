// src/pages/AlumniProfile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AlumniDetails = () => {
  const [connectionStatus, setConnectionStatus] = useState("Connect");
  const navigate = useNavigate();

  const handleConnect = () => {
    // Simulate sending connection request
    setConnectionStatus("Request Sent");
    alert("Connection Request Sent");
    // Here you can trigger your backend to send the actual request
  };

  const handleChat = () => {
    // If connection is accepted, route to chat page
    navigate("/chat");
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 p-6">
        <div className="bg-gray-800 text-white rounded-lg p-6">
          <h2 className="text-3xl font-bold">John Doe</h2>
          <p className="text-lg mt-2">Software Engineer at Google</p>
          <p className="text-md mt-4">
            Passionate about software development and mentoring young talent.
          </p>
          <div className="mt-6">
            <button
              onClick={handleConnect}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              {connectionStatus}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/4 p-6">
        <div className="bg-gray-800 text-white rounded-lg p-6">
          <button
            onClick={handleChat}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumniDetails;
