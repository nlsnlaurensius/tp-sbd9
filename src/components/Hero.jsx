import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white p-8 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Modul <span className="text-blue-400">Advanced Frontend</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 drop-shadow">
          TP_FZ_NelsonLaurensius_2306161845_SBD9
        </p>
        <a
          href="#gallery"
          className="inline-block bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:from-blue-900 hover:via-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          onClick={(e) => { e.preventDefault(); document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' }); }}
        >
          Explore Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;