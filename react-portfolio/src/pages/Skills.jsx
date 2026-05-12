import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: '/java.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png' },
    { name: 'Power BI', icon: '/power-bi_logo.png' },
    { name: 'Advanced Excel', icon: '/advancedExcel.png' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/96/sql.png' },
  ];

  return (
    <section id="skills" className="min-h-screen py-32 px-8 md:px-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 justify-items-center mb-20">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/20 bg-white/5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
              </div>
              <p className="font-semibold text-white text-center">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex items-center gap-2 mx-8">
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                <span className="text-slate-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;