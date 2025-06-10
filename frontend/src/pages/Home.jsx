import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alumni Interaction Portal</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/events"
                  className="hover:underline text-white"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="hover:underline text-white"
                >
                  Job Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/donations"
                  className="hover:underline text-white"
                >
                  Donation Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:underline text-white"
                >
                  Profile
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/logout"
                  className="hover:underline text-white"
                >
                  Logout
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            Welcome to the Alumni Interaction Portal!
          </h2>
          <p className="mt-4 text-gray-700">
            Connect with alumni, explore events, and access opportunities to grow your career and network.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Events Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-600">Upcoming Events</h3>
            <p className="mt-2 text-gray-600">
              Stay updated with alumni meetups, webinars, and more.
            </p>
            <Link
              to="/events"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              View Events →
            </Link>
          </div>

          {/* Job Portal Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-600">Job Portal</h3>
            <p className="mt-2 text-gray-600">
              Explore job openings and apply directly through the portal.
            </p>
            <Link
              to="/jobs"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Browse Jobs →
            </Link>
          </div>

          {/* Donations Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-blue-600">Donation Portal</h3>
            <p className="mt-2 text-gray-600">
              Support initiatives and make a difference by contributing.
            </p>
            <Link
              to="/donations"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Donate Now →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
