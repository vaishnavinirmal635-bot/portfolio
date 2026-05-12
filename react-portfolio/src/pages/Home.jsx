import React from 'react';

const Home = () => {
  const handleExplore = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const handleHire = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-cyan-500 via-slate-900 to-gray-900 text-white flex items-center px-8 md:px-16">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hello, I'm <span className="text-yellow-400">Vaishnavi Nirmal</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-slate-100 leading-relaxed">
          Studying MBA at Sinhgad Institute of Management <br />
          Specialization: Business Analytics
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={handleExplore}
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition duration-300 text-lg"
          >
            Explore Me
          </button>
          <button
            onClick={handleHire}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition duration-300 text-lg"
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;