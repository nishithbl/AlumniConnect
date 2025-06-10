import React from 'react';
import alu1 from '../../assets/alu1.jpg';
import alu2 from '../../assets/alu2.jpg';
import alu3 from '../../assets/alu3.jpg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
function SuccessPage() {
  const alumniStories = [
    {
      name: 'John Doe',
      designation: 'Software Engineer at TechCorp',
      story: 'I started my career at TechCorp after graduating, and I have been able to work on amazing projects that have shaped my skills and career.',
      photo: alu1
    },
    {
      name: 'Jane Smith',
      designation: 'Product Manager at Innovate Inc.',
      story: 'My time at university prepared me for the challenges of product management. I now lead a team that develops innovative solutions.',
      photo: alu2
    },
    {
      name: 'Emily Johnson',
      designation: 'Data Scientist at DataWise',
      story: 'The analytical skills I gained during my studies have been invaluable in my role as a data scientist, helping me to make data-driven decisions.',
      photo: alu3
    }
  ];

  return (
    <div className="p-8 my-12 text-center">
      <Navbar/>
      <h1 className="text-3xl font-bold mb-6">Alumni Success Stories</h1>
      <div className="flex flex-col items-center">
        {alumniStories.map((alumni, index) => (
          <div
            className={`group flex items-center border border-gray-300 hover:border-blue-500 rounded-lg p-4 mb-4 w-4/5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            key={index}
          >
            <div className={`w-24 h-24 rounded-full overflow-hidden ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
              <img src={alumni.photo} alt={`${alumni.name}'s profile`} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-left relative">
              <h2 className="text-xl font-semibold text-white group-hover:underline">{alumni.name}</h2>
              <h3 className="text-lg text-gray-200">{alumni.designation}</h3>
              <p className="mt-2 text-gray-200">{alumni.story}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default SuccessPage;
