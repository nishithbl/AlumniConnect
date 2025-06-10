import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationStatus, setDonationStatus] = useState(null);
  
  const targetFunds = 50000; // Example target funds
  const fundsReceived = 20000; // Example funds received

  // Handle donation submission (mock submission)
  const handleDonationSubmit = () => {
    if (donationAmount <= 0) {
      setDonationStatus("Please enter a valid donation amount.");
    } else {
      setDonationStatus(`Thank you for your generous donation of ₹${donationAmount}`);
      // Add your payment gateway logic here (e.g., Stripe or PayPal)
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 py-10">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Event Donation Page</h1>
          <p className="text-lg text-center mb-6">
            We are organizing an exciting technical event, SYNERGIA-DEVHOST, to foster innovation and technical excellence. 
            Your generous contributions will help us make this event even more impactful.
          </p>
          
          {/* Event Details */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
            <p className="text-md mb-2">Event Name: SYNERGIA-DEVHOST</p>
            <p className="text-md mb-2">Event Date: November 6-8, 2024</p>
            <p className="text-md mb-2">Location: Sahyadri College of Engineering and Management, Mangalore</p>
            <p className="text-md mb-2">Purpose: Foster technical innovation and learning among college students.</p>
          </div>

          {/* Funds Received and Target */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Funding Details</h2>
            <p className="text-md mb-2">Target Funds: ₹{targetFunds}</p>
            <p className="text-md mb-2">Funds Received: ₹{fundsReceived}</p>
            <div className="w-full bg-gray-600 h-2 rounded-lg mt-2">
              <div
                className="bg-green-500 h-full"
                style={{ width: `${(fundsReceived / targetFunds) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Donation Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full p-4 bg-gray-700 text-white border-2 border-gray-600 rounded-lg mb-4"
              placeholder="Enter donation amount (₹)"
            />
            <div className="text-center mb-6">
              <button
                onClick={handleDonationSubmit}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Donate Now
              </button>
            </div>
          </div>

          {/* Donation Status */}
          {donationStatus && (
            <div className="text-center text-xl text-yellow-400 mt-4">
              <p>{donationStatus}</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonationPage;
