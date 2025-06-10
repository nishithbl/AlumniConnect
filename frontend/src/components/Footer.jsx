import React from "react";
import FacebookIcon from "../assets/facebook.png";
import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedinIcon from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-blue-500 opacity-70 text-white py-4">
      <div className="container  flex flex-row items-center space-x-4 justify-between">
        <p className="text-center  p-2">© 2024 Your Company. All rights reserved.</p>
        <div className="flex space-x-6 p-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src={TwitterIcon} alt="Twitter" className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src={LinkedinIcon} alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
