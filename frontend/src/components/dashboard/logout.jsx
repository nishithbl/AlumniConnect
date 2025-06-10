import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data or authentication tokens if any
    localStorage.removeItem("userToken");  // Example if you're storing user token in localStorage

    // Redirect to the login page
    navigate("/login");
  }, [navigate]);

  return null; // No need to render anything on this page
};

export default Logout;
