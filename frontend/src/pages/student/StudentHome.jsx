import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // For Carousel styles
import carp1 from '../../assets/car1.jpg';
import carp2 from '../../assets/car2.jpg';
import carp3 from '../../assets/car3.jpg';
import alu1 from '../../assets/alu1.jpg';
import alu2 from '../../assets/alu2.jpg';
import alu3 from '../../assets/alu3.jpg';

const StudentHome = () => {
  return (
    <div className="bg-black w-full h-screen text-white">
      <Navbar />
      <div className="text-center my-8 py-12">
        <h1 className="text-4xl font-bold">Connect and Grow...</h1>
      </div>

      {/* Carousel Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="rounded-lg overflow-hidden"
        >
          <div>
            <img src={carp1} alt="Image 1" />
          </div>
          <div>
            <img src={carp2} alt="Image 2" />
          </div>
          <div>
            <img src={carp3} alt="Image 3" />
          </div>
        </Carousel>
      </div>

      {/* Job Opportunities Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <img
            src="https://media.istockphoto.com/id/506351726/photo/recruiter-advertising-for-job-vacancies-searching-candidates-to-hire.jpg?s=612x612&w=0&k=20&c=JNtjXENGX7igzXRDCaifzEcRox2FCUPzF0hptTK3dRw="
            alt="Job Opportunities"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Explore Job Opportunities</h2>
            <p className="text-lg mb-4">
            In today's competitive job market, finding the right position that aligns with your unique skills and career aspirations is crucial. Our platform offers resources for resume building, and interview preparation tips, we empower you to take the next step in your career journey with confidence and clarity. Discover your potential and unlock new possibilities today!


 
            </p>
            <Link to="/jobs" className=" hover:bg-white hover:bg-opacity-20  hover:border-2 hover:border-white  text-white px-6 py-2 rounded-lg border-blue-300 border-2">
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* Alumni Connections Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect with Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={alu1}
                alt="Alumni 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm mb-4">Software Engineer at Google</p>
              <Link
                to="/alumnidetails"
                className=" hover:bg-blue-500 hover:bg-opacity-20  hover:border-2 hover:border-blue-500  text-white px-6 py-2 rounded-lg"
              >
                Connect
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={alu2}
                alt="Alumni 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-sm mb-4">Data Scientist at Meta</p>
              <Link
                to="/alumnidetails"
                className=" hover:bg-blue-500 hover:bg-opacity-20  hover:border-2 hover:border-blue-500  text-white px-6 py-2 rounded-lg"
              >
                Connect 
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={alu3}
                alt="Alumni 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Michael Brown</h3>
              <p className="text-sm mb-4">Product Manager at Amazon</p>
              <Link
                to="/alumnidetails"
                className="  hover:bg-blue-500 hover:bg-opacity-20  hover:border-2 hover:border-blue-500  text-white px-6 py-2 rounded-lg"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StudentHome;
