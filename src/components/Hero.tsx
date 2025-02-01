import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Background GIF with radial gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://media.giphy.com/media/Q9aBxHn9fTqKs/giphy.gif?cid=790b7611mhw7gttgft7t9do3d57fwrnvr4as8wcb8yonnhi6&ep=v1_gifs_search&rid=giphy.gif&ct=g')"
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content Container */}
      <div className="relative z-20 text-center max-w-4xl mx-auto float">
        <h1 className="text-7xl font-bold text-white mb-8 uppercase tracking-wider text-glow">
          Fight Cybercrime.<br />Stay Secure.
        </h1>
        <p className="text-white/90 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          In a world where digital threats evolve every second, your security 
          can't wait. Our advanced cybersecurity solutions provide real-time 
          protection against emerging threats.
        </p>
        <button className="group relative px-8 py-4 text-xl font-mono text-white bg-transparent border-2 border-green-400 rounded-lg overflow-hidden transition-all duration-300 hover:text-black">
          <span className="relative z-10">Report Cybercrime Now</span>
          <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;