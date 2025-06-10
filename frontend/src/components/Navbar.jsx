import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons
import logo from '../assets/logo.jpg';

const Navbar = () => {
  // State for user type: 'student' or 'alumni'
  const [userType, setUserType] = useState("alumni"); // Replace 'student' with dynamic data from your authentication logic
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Sample list of items to search from (replace this with your actual data or API call)
  const items = [
    "Home",
    "About",
    "Contact",
    "Success",
    "Events",
    "Courses",
    "News",
    "Blog",
  ];

  // Handle the change in search input field
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search functionality (filter the items based on query)
  const handleSearch = () => {
    if (searchQuery === "") {
      setFilteredItems([]);
    } else {
      // Filter the items that match the search query (case-insensitive)
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  // Handle profile redirection
  const handleProfileRedirect = () => {
    return userType === "student" ? "/studentprofile" : "/alumniprofile";
  };

  return (
    <nav className="bg-blue-500 bg-opacity-30 backdrop-filter backdrop-blur-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo and Search Bar */}
          <div className="flex items-center space-x-6">
            {/* <h1 className="text-white text-2xl font-bold">MyWebsite</h1> */}
            <img className="rounded-full w-14" src={logo} alt="alumniwebpage"/>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyUp={handleSearch} // Trigger search on key press
                placeholder="Search..."
                className="bg-white text-black pl-10 pr-4 py-2 rounded-full outline-none w-48"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Right Side: Navbar Tabs and Profile Icon */}
          <div className="flex items-center space-x-6">
            {/* Tabs */}
            <Link
              to="/home"
              className="relative text-white transition duration-300 group"
            >
              Home
              <span className="absolute left-0 bottom-[-6px] h-[3px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative text-white transition duration-300 group"
            >
              About
              <span className="absolute left-0 bottom-[-6px] h-[3px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="relative text-white transition duration-300 group"
            >
              Contact
              <span className="absolute left-0 bottom-[-6px] h-[3px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/success"
              className="relative text-white transition duration-300 group"
            >
              Success
              <span className="absolute left-0 bottom-[-6px] h-[3px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Profile Button with Image and Dropdown */}
            <div className="relative">
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {/* Profile Image */}
                <img
                  src={user} // Change this path to your actual profile image
                  alt="Profile"
                  className="h-8 w-8 my-10 rounded-full border-2 border-white"
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black text-white shadow-lg rounded-lg">
                  <Link
                    to={handleProfileRedirect()}
                    className="block px-4 py-2 text-sm hover:outline-1 hover:border-white hover:border-2 rounded-lg"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:border-white hover:border-2 rounded-lg"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="block px-4 py-2 text-sm w-full text-left hover:border-white hover:border-2 rounded-lg"
                    onClick={() => {
                      // Implement logout functionality here
                      setIsDropdownOpen(false);
                    }}
                  >
                    <Link to={"/login"}>
                    Logout
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results (if any) */}
      {filteredItems.length > 0 && (
        <div className="absolute bg-white text-black shadow-lg w-full mt-16 z-50">
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
