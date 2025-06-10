import React, { useState } from 'react';
import Navbar from '../Navbar';
function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    college: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div >
        <Navbar />
    <div className="max-w-md mx-auto p-4 bg-blue-500 bg-opacity-30 backdrop-filter backdrop-blur-lg text-white rounded-lg shadow-lg my-20">
      <h2 className="text-2xl font-bold mb-4">Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="skills">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="experience">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            required
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
        >
          Apply
        </button>
      </form>
    </div>
</div>
  );
}

export default Apply;