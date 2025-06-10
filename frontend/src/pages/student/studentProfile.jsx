import React, { useState } from "react";
import PencilIcon from "../../assets/pencil.png";

const StudentProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "Jane Doe",
    status: "Software Engineer",
    experience: "2 years at ABC Corp",
    education: "B.Tech in Computer Science",
    skills: "JavaScript, React, Node.js",
    interests: "Open Source, Machine Learning",
  });

  const [editData, setEditData] = useState(profileData);
  const [isEditing, setIsEditing] = useState({
    status: false,
    experience: false,
    education: false,
    skills: false,
    interests: false,
  });

  const handleEditToggle = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (section, value) => {
    setEditData((prev) => ({ ...prev, [section]: value }));
  };

  const handleSaveAll = () => {
    setProfileData(editData);
    setIsEditing({
      status: false,
      experience: false,
      education: false,
      skills: false,
      interests: false,
    });
  };

  const renderSection = (title, sectionKey) => (
    <div className="mb-6 border-2 p-4 hover:border-blue-500 rounded relative">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {isEditing[sectionKey] ? (
        <div className="flex items-center mt-2">
          <input
            type="text"
            value={editData[sectionKey]}
            onChange={(e) => handleInputChange(sectionKey, e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleEditToggle(sectionKey)}
            className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center mt-2">
          <p className="flex-1">{profileData[sectionKey]}</p>
          <button
            onClick={() => handleEditToggle(sectionKey)}
            className="absolute right-4 w-8 flex-shrink-0"
          >
            <img src={PencilIcon} alt="Edit" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen p-6 bg-black">
      <div className="max-w-4xl mx-auto bg-transparent border-2 border-white text-white shadow-md rounded-lg p-6">
        {/* Profile Picture Section */}
        <div className="flex items-center hover:border-blue-500 border-2 border-white p-4 rounded space-x-6 mb-6">
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

        {/* Professional Status Section */}
        <div className="mb-6  border-white border-2 p-4 hover:border-blue-500 rounded">
          <h2 className="text-lg font-semibold text-white">Professional Status</h2>
          {isEditing.status ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={editData.status}
                onChange={(e) => handleInputChange("status", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleEditToggle("status")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.status}</p>
              <button
                onClick={() => handleEditToggle("status")}
                className="ml-80 px-4 py-2 flex-shrink-0 w-16"
              >
                <img  className='' src={PencilIcon}/>
              </button>
            </div>
          )}
        </div>

        {/* Experience Section */}
        <div className="mb-6 border-2 p-4 hover:border-blue-500 rounded">
          <h2 className="text-lg font-semibold text-white">Experience</h2>
          {isEditing.experience ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={editData.experience}
                onChange={(e) => handleInputChange("experience", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleEditToggle("experience")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.experience}</p>
              <button
                onClick={() => handleEditToggle("experience")}
                className=" ml-80 px-4 py-2 w-16"
              >
                <img src={PencilIcon}/>
              </button>
            </div>
          )}
        </div>

        {/* Education Section */}
        <div className="mb-6 border-2 p-4 hover:border-blue-500 rounded">
          <h2 className="text-lg font-semibold text-white">Education</h2>
          {isEditing.education ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={editData.education}
                onChange={(e) => handleInputChange("education", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleEditToggle("education")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.education}</p>
              <button
                onClick={() => handleEditToggle("education")}
                className="ml-80 px-4 py-2 w-16"
              >
                <img src={PencilIcon}/>
              </button>
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="mb-6 border-2 p-4 hover:border-blue-500 rounded">
          <h2 className="text-lg font-semibold text-white">Skills</h2>
          {isEditing.skills ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={editData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleEditToggle("skills")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.skills}</p>
              <button
                onClick={() => handleEditToggle("skills")}
                className="ml-80 px-4 py-2 w-16"
              >
                <img src={PencilIcon}/>
              </button>
            </div>
          )}
        </div>

        {/* Interests Section */}
        <div className="mb-6 border-2 p-4 hover:border-blue-500 rounded">
          <h2 className="text-lg font-semibold text-white">Interests</h2>
          {isEditing.interests ? (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={editData.interests}
                onChange={(e) => handleInputChange("interests", e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleEditToggle("interests")}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-2">
              <p>{profileData.interests}</p>
              <button
                onClick={() => handleEditToggle("interests")}
                className="ml-80 px-4 py-2 w-16"
              >
                <img src={PencilIcon}/>
              </button>
            </div>
          )}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleSaveAll}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;