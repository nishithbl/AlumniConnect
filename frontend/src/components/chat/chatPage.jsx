import React, { useState, useEffect } from "react";
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

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Simulate receiver's response (alumni)
  useEffect(() => {
    const timer = setInterval(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "This is the alumni's response.", sender: "alumni" },
      ]);
    }, 5000000); // Alumni responds every 5 seconds

    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "student" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-black w-full h-screen text-white">
      <Navbar />
      
      {/* Alumni Details Section */}
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="w-full md:w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-6 mb-6">
            <img
              src={alu1}
              alt="Alumni Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">John Doe</h1>
              <p className="text-sm text-white">Software Engineer at Google</p>
            </div>
          </div>

          {/* Alumni Details Card Section */}
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold">About</h3>
              <p className="text-sm text-white">
                John is passionate about software development, particularly in the areas of cloud computing and machine learning.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold">Experience</h3>
              <p className="text-sm text-white">
                John has worked at leading tech companies, including Google, where he led several important cloud projects.
              </p>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="w-full md:w-1/4 bg-gray-900 p-6 rounded-lg shadow-lg mt-6 md:mt-0">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">Chat with John Doe</h2>
          </div>

          {/* Chat Messages */}
          <div className="h-80 overflow-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "student" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`p-4 rounded-lg max-w-xs ${message.sender === "student" ? "bg-blue-500 text-white" : "bg-white text-black"}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg border-2 border-gray-500 bg-black text-white"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatPage;
