import React, { useState } from "react";
import PencilIcon from "../../assets/pencil.png";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const AlumniProfile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Software Architect",
    note: "Passionate about mentoring and open-source development.",
    connectionRequests: [
      { id: 1, name: "Jane Doe", status: "pending", studentId: "123" },
      { id: 2, name: "Alice Johnson", status: "pending", studentId: "456" },
    ],
  });

  const [editData, setEditData] = useState(profileData);
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    role: false,
    note: false,
  });

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    if (isEditing[field]) {
      setProfileData((prev) => ({ ...prev, [field]: editData[field] }));
    }
  };

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdateProfile = () => {
    setProfileData(editData);
    setIsEditing({
      name: false,
      email: false,
      role: false,
      note: false,
    });
    alert("Profile updated successfully!");
  };

  const handleConnectionRequest = (id, action) => {
    setProfileData((prev) => {
      const updatedRequests = prev.connectionRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: action };
        }
        return request;
      });
      return { ...prev, connectionRequests: updatedRequests };
    });
  };

  const navigateToChatPage = (studentId) => {
    // Navigate to the chat page with the student's ID
    navigate('/chat');
  };

  return (
    <div className="min-h-screen p-6 bg-black">
      <div className="max-w-4xl mx-auto bg-transparent text-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">{profileData.name}</h1>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Change Profile Photo
            </button>
          </div>
        </div>

        {/* Name Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">Name</h2>
          {isEditing.name ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={editData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleEditToggle("name")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.name}</p>
              <button
                onClick={() => handleEditToggle("name")}
                className="ml-auto px-4 py-2 w-16"
              >
                <img src={PencilIcon} alt="Edit" />
              </button>
            </div>
          )}
        </div>

        {/* Email Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">Email</h2>
          {isEditing.email ? (
            <div className="flex items-center mt-2">
              <input
                type="email"
                value={editData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleEditToggle("email")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.email}</p>
              <button
                onClick={() => handleEditToggle("email")}
                className="ml-auto px-4 py-2 w-16"
              >
                <img src={PencilIcon} alt="Edit" />
              </button>
            </div>
          )}
        </div>

        {/* Role Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">Role</h2>
          {isEditing.role ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={editData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleEditToggle("role")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.role}</p>
              <button
                onClick={() => handleEditToggle("role")}
                className="ml-auto px-4 py-2 w-16"
              >
                <img src={PencilIcon} alt="Edit" />
              </button>
            </div>
          )}
        </div>

        {/* Note Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">Note</h2>
          {isEditing.note ? (
            <div className="flex items-center mt-2">
              <textarea
                value={editData.note}
                onChange={(e) => handleInputChange("note", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              ></textarea>
              <button
                onClick={() => handleEditToggle("note")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.note}</p>
              <button
                onClick={() => handleEditToggle("note")}
                className="ml-auto px-4 py-2 w-16"
              >
                <img src={PencilIcon} alt="Edit" />
              </button>
            </div>
          )}
        </div>

        {/* Connection Requests Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">
            Connection Requests
          </h2>
          {profileData.connectionRequests.length > 0 ? (
            profileData.connectionRequests.map((request) => (
              <div key={request.id} className="flex items-center mt-2">
                <p>{request.name}</p>
                <div className="ml-auto flex space-x-4">
                  {request.status === "pending" ? (
                    <>
                      <button
                        onClick={() => handleConnectionRequest(request.id, "accepted")}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleConnectionRequest(request.id, "rejected")}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{request.status === "accepted" ? "Connected" : "Rejected"}</p>
                      {request.status === "accepted" && (
                        <button
                          onClick={() => navigateToChatPage(request.studentId)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          Chat with {request.name}
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No connection requests.</p>
          )}
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdateProfile}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default AlumniProfile;
