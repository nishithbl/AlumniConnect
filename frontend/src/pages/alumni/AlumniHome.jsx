import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // For Carousel styles;
import eve1 from "../../assets/eve1.jpg";
import eve2 from "../../assets/eve2.jpg";
import eve3 from "../../assets/eve3.jpg";
import eve4 from '../../assets/eve4.jpg';
import eve5 from '../../assets/eve5.jpg';
import eve6 from '../../assets/eve6.jpg';
import caro1 from '../../assets/0.png';
import caro2 from '../../assets/1.png';
import caro3 from '../../assets/2.png';
import caro4 from '../../assets/3.png';
import caro5 from '../../assets/4.png';
import caro6 from '../../assets/5.png';

const AlumniMeetSection = () => {
  const [year, setYear] = useState(new Date().getFullYear() + 1); // Automatically set to next year

  useEffect(() => {
    const interval = setInterval(() => {
      const currentYear = new Date().getFullYear();
      setYear(currentYear + 1); // Update to next year
    }, 1000 * 60 * 60 * 24); // Update every day

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Awaiting Alumni Meet</h2>
      <div className="flex justify-center items-center space-x-2">
        {year.toString().split('').map((digit, index) => (
          <div
            key={index}
            className="bg-blue-500 bg-opacity-50 backdrop-filter backdrop-blur-lg text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-lg"
          >
            {digit}
          </div>
        ))}
      </div>
      <p className="mt-4 text-lg">Join us for an exciting reunion!</p>
    </section>
  );
};

const AlumniHome = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setSelectedIndex(index);
  };

  const images = [caro1, caro2, caro3, caro4, caro5, caro6];

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
          selectedItem={selectedIndex}
          onChange={handleCarouselChange}
          className="rounded-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative ${index === selectedIndex ? 'filter-none' : 'filter blur-sm'}`}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className={`transition-all duration-300 ease-in-out ${index === selectedIndex ? 'opacity-100' : 'opacity-70'}`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Job Opportunities Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2 flex flex-wrap justify-center">
            <img
              src={eve1}
              alt="Image 1"
              className="w-1/2 h-64 rounded-lg shadow-lg m-2" // Taller image
            />
            <img
              src={eve3}
              alt="Image 2"
              className="w-1/3 h-48 rounded-lg shadow-lg m-2" // Medium-sized image
            />
            <img
              src={eve5}
              alt="Image 3"
              className="w-1/2 h-32 rounded-lg shadow-lg m-2" // Shorter image
            />
            <img
              src={eve6}
              alt="Image 4"
              className="w-full h-56 rounded-lg shadow-lg m-2" // Full width image
            />
            <img
              src={eve4}
              alt="Image 5"
              className="w-1/3 h-64 rounded-lg shadow-lg m-2" // Taller image
            />
            <img
              src={eve2}
              alt="Image 6"
              className="w-1/4 h-48 rounded-lg shadow-lg m-2" // Smaller image
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <div className="bg-tansparent bg-opacity-50 p-6 border-white border-2 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-lg text-white">Join us in finding the perfect day for you!</p>
              
              {/* Additional Lines */}
              <p className="mt-4 text-white">We have exciting events lined up for our alumni community.</p>
              <p>Stay tuned for more information!</p>

              {/* Donation Button */}
              <a 
                href="/donation" 
                className="mt-6 inline-block border-2 border-blue-500 hover:bg-opacity-25 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Meet Section */}
      <AlumniMeetSection />

      <Footer />
    </div>
  );
};

export default AlumniHome;
