import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="bg-black text-white my-8 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 py-10">
        {/* About Section Header */}
        <section className="bg-gray-800 p-8 rounded-lg hover:border-2 hover:border-white shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4">
            About Alumni Interaction Portal
          </h1>
          <p className="text-lg text-center mb-6">
            The Alumni Interaction Portal is a platform that brings together our esteemed alumni and current students, offering an opportunity for mentorship, networking, and sharing experiences. Through this platform, we aim to bridge the gap between past and present, enabling students to benefit from the wisdom and success stories of our alumni.
          </p>
        </section>

        {/* Vision and Mission Section */}
        <section className="bg-gray-800 p-8  hover:border-2 hover:border-white rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-center text-yellow-400 mb-4">
            Vision and Mission
          </h2>
          <div className="text-lg">
            <p className="mb-4">
              Our vision is to create a dynamic community where alumni can actively contribute to the development of students by sharing their knowledge, experiences, and guidance. We aim to foster a culture of giving back, where alumni and students can collaborate to build a brighter future for all.
            </p>
            <p className="mb-4">
              The mission of the Alumni Interaction Portal is to:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Provide a platform for alumni to share their expertise and advice.</li>
              <li>Encourage networking and collaboration between alumni and students.</li>
              <li>Offer mentoring opportunities for students to learn from the successes of alumni.</li>
              <li>Enhance the career development of students by connecting them with industry experts.</li>
              <li>Strengthen the bond between alumni and their alma mater.</li>
            </ul>
          </div>
        </section>

        {/* Benefits for Students and Alumni */}
        <section className="bg-gray-800 p-8 hover:border-2 hover:border-white rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-center text-yellow-400 mb-4">
            Benefits for Students and Alumni
          </h2>
          <div className="text-lg">
            <h3 className="font-semibold mb-4">Benefits for Students:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Gain valuable career advice and guidance from successful alumni.</li>
              <li>Access networking opportunities that can open doors to internships and job placements.</li>
              <li>Learn from alumni success stories to understand industry trends and skills in demand.</li>
              <li>Develop mentorship relationships with industry experts to guide your professional growth.</li>
            </ul>
            
            <h3 className="font-semibold mb-4">Benefits for Alumni:</h3>
            <ul className="list-disc list-inside">
              <li>Give back to the institution by helping shape the future careers of students.</li>
              <li>Build a strong connection with the next generation of professionals in your industry.</li>
              <li>Enhance your personal and professional network by engaging with like-minded individuals.</li>
              <li>Stay involved with the alma mater, maintaining a lasting relationship and legacy.</li>
            </ul>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-800 p-8 rounded-lg hover:border-2 hover:border-white shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-center text-yellow-400 mb-4">
            How It Works
          </h2>
          <div className="text-lg">
            <p className="mb-4">
              The Alumni Interaction Portal is designed to be a user-friendly platform that allows easy communication between alumni and students. Here's how it works:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Alumni Sign-Up:</strong> Alumni can create their profiles by signing up on the platform, detailing their professional background, industry expertise, and areas they wish to mentor or provide guidance on.</li>
              <li><strong>Student Access:</strong> Current students can browse through the alumni directory, filter by industry, expertise, and interests, and choose the alumni they wish to interact with.</li>
              <li><strong>Message and Mentorship:</strong> Students can send messages to alumni, ask for advice, or schedule mentoring sessions through the platform. Alumni can respond to inquiries, offering personalized advice or guidance.</li>
              <li><strong>Alumni Events:</strong> We organize periodic webinars, panel discussions, and networking events where students can meet alumni and ask questions in real time.</li>
            </ol>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
