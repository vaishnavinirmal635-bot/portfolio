import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Business Analytics Certificate',
      issuer: 'carriar Katta',
      image: '/certificate1.jpg.jpeg'
    },
    {
      title: 'Power BI Certification',
      issuer: 'Courcera',
      image: '/certificate2.jpg.jpeg'
    }
  ];

  const viewCertificate = (fileName) => {
    window.open(fileName, '_blank');
  };

  return (
    <section id="certifications" className="min-h-screen py-32 px-8 md:px-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4 text-white">{cert.title}</h3>
              <p className="mb-6 text-slate-300 text-lg"><strong>Issued By:</strong> {cert.issuer}</p>
              <button
                onClick={() => viewCertificate(cert.image)}
                className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition duration-300 font-semibold"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;