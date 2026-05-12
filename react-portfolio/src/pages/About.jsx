import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-32 px-8 md:px-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-80 h-80 rounded-full overflow-hidden ring-4 ring-yellow-400/30 shadow-2xl shadow-black/30 flex-shrink-0">
            <img src="/profile.jpg.jpeg" alt="Vaishnavi Nirmal" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-left space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed">
              Hi! I am Vaishnavi Nirmal, pursuing MBA at Sinhgad Institute of Management
              with specialization in Business Analytics. I am passionate about data, analytics,
              and solving real-world business problems.
            </p>
            <p className="text-slate-300 text-lg">
              Email: <a href="mailto:vaishnavinirmal635@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition duration-200 font-medium">vaishnavinirmal635@gmail.com</a>
            </p>
            <a
              href="/Vaishnavi_Data_Analyst_Resume.docx"
              download
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition duration-300 inline-block text-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;