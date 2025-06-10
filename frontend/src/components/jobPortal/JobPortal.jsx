import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
 import jobPoster1 from '../../assets/alu1.jpg'; // Replace with actual image paths
import jobPoster2 from '../../assets/alu2.jpg'; // Replace with actual image paths

function JobPortal() {
  const [isInternship, setIsInternship] = useState(true); // Default to Internship
  const navigate = useNavigate(); // For navigation to the Apply page

  const handleToggle = () => {
    setIsInternship(!isInternship);
  };

  // Internship Data
  const internships = [
    {
      role: 'Software Development Intern',
      salary: '₹25,000 per month',
      location: 'Remote',
      type: 'Internship',
      experience: 'Fresher',
      postedBy: 'John Doe',
      posterRole: 'HR Manager',
      posterImage: jobPoster1,
    },
    {
      role: 'Data Analyst Intern',
      salary: '₹15,000 per month',
      location: 'Onsite - Bengaluru',
      type: 'Internship',
      experience: 'Fresher',
      postedBy: 'Jane Smith',
      posterRole: 'Product Manager',
      posterImage: jobPoster2,
    },
  ];

  // Job Data
  const jobs = [
    {
      role: 'Software Engineer',
      salary: '₹8,00,000 per year',
      location: 'Onsite - Mumbai',
      type: 'Full-time',
      experience: '2-3 years',
      postedBy: 'Emily Johnson',
      posterRole: 'Team Lead',
      posterImage: jobPoster1,
    },
    {
      role: 'Product Manager',
      salary: '₹12,00,000 per year',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      postedBy: 'Mark Wilson',
      posterRole: 'Hiring Manager',
      posterImage: jobPoster2,
    },
  ];

  const handleApply = () => {
    navigate('/apply'); // Navigate to the Apply page
  };

  return (
    <div className="p-8">
      {/* Toggle Button */}
      <div className="flex justify-center mb-8">
        <div className="relative inline-flex items-center justify-between w-64 h-12 bg-gray-300 rounded-full">
          <div
            onClick={() => setIsInternship(true)}
            className={`w-1/2 h-full flex items-center justify-center cursor-pointer rounded-l-full ${
              isInternship ? 'bg-blue-500 text-white' : 'bg-transparent'
            }`}
          >
            Internship
          </div>
          <div
            onClick={() => setIsInternship(false)}
            className={`w-1/2 h-full flex items-center justify-center cursor-pointer rounded-r-full ${
              !isInternship ? 'bg-blue-500 text-white' : 'bg-transparent'
            }`}
          >
            Job
          </div>
        </div>
      </div>

      {/* Cards Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(isInternship ? internships : jobs).map((item, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={item.posterImage}
                  alt={`${item.postedBy}'s profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.postedBy}</h3>
                <p className="text-sm text-gray-600">{item.posterRole}</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
            <p className="text-gray-700">Salary: {item.salary}</p>
            <p className="text-gray-700">Location: {item.location}</p>
            <p className="text-gray-700">Type: {item.type}</p>
            <p className="text-gray-700">Experience: {item.experience}</p>
            <button
              onClick={handleApply}
              className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md transition duration-300 hover:bg-green-700"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobPortal;
