import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import StudentHome from "./pages/student/StudentHome";
import AlumniHome from "./pages/alumni/AlumniHome";
import Contact from "./components/contact/Contact";
import SuccessPage from "./components/dashboard/SuccessPage";
import Apply from "./components/jobPortal/Apply";
import JobPortal from "./components/jobPortal/JobPortal";
import StudentProfile from "./pages/student/studentProfile";
import AlumniProfile from "./pages/alumni/alumniProfile";
import Settings from "./components/dashboard/settings";
import Logout from "./components/dashboard/logout";
import AlumniDetails from "./pages/student/alumniDetails";
import ChatPage from "./components/chat/chatPage";
import DonationPage from "./components/donation/Donation";
import AboutPage from "./pages/About";






const App = () => {
  const [role, setRole] = useState("student"); // Example role state

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Register/>}
        />
        <Route
          path="/login"
          element={ <Login />}
        />
        {/* Conditional routing for different homepages based on role  */}
         <Route
          path="/home"
          element={ (role === "student" ? <StudentHome /> : <AlumniHome />) }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/jobs" element={<JobPortal/>}/>
        <Route path='/studentprofile' element={<StudentProfile/>}/>
        <Route path="/alumniprofile" element={<AlumniProfile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/alumnidetails" element={<AlumniDetails/>}/>
        <Route path="/chat" element={<ChatPage/>}/>
        <Route path='/donation' element={<DonationPage/>}/>
        <Route path="/about" element={<AboutPage/>} />
        
      </Routes> 
      
     
    </Router>
  );
};

export default App;
