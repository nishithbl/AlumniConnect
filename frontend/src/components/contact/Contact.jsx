// src/Contact.jsx
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div className="bg-black text-white my-6 p-6">
    < Navbar />
     
      <header className=" text-white p-6 mb-8">
        <h1 className="text-4xl text-center font-bold">Get in Touch with Us</h1>
      </header>

      <div className="flex flex-col items-center ">
        <section
          id="contact-form"
          className="mb-8 text-white border-2 border-white rounded-md w-1/2 mx-5 "
        >
          {/* <h2 className="text-2xl font-semibold  text-white text-center mb-4">Contact Us</h2> */}
          <form
            action="submit_form.php"
            method="POST"
            className="bg-black p-6 rounded shadow-md"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="border border-gray-300 rounded p-2 w-full h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="hover:bg-blue-600 border-2 border-blue-500  text-white py-2 px-4 rounded hover:bg-opacity-25"
            >
              Send Message
            </button>
          </form>
        </section>{" "}
      </div>

      <div className="flex flex-row justify-center space-x-2 my-5 items-start">
        <section id="contact-info" className="mb-8 w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:alumni@university.edu" className="text-blue-500">
                alumni@university.edu
              </a>
            </li>
            <li>
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li>
              <strong>Address:</strong>
              <p>
                Alumni Relations Office
                <br />
                123 University Ave
                <br />
                City, State, Zip Code
              </p>
            </li>
          </ul>
        </section>

        <section id="social-media" className="mb-8 w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <ul className="list-none">
            <li>
              <a
                href="https://facebook.com/university"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/university"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/groups/university"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/university"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* <footer className="mt-8">
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} University Alumni. All rights reserved.
        </p>
      </footer> */}
      <Footer />
    </div>
  );
}

export default Contact;
