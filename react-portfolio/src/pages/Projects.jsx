import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'BizNotify',
      description: 'A comprehensive dashboard for business analytics using Power BI and Excel.',
      tech: ['Power BI', 'Excel', 'SQL'],
      link: '#',
      featured: true
    },
    {
      title: 'Data Visualization Project',
      description: 'Interactive data visualizations for MBA projects using Python and Tableau.',
      tech: ['Python', 'Tableau', 'Pandas'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-32 px-8 md:px-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ${project.featured ? 'ring-2 ring-yellow-400/50 bg-yellow-400/5' : ''}`}>
              {project.featured && <div className="text-yellow-400 text-sm font-bold mb-2">Featured Project</div>}
              <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
    </section>
  );
};

export default Projects;