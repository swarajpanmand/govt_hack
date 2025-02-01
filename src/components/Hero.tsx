import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')" 
        }}
      />
      <h1 className="text-5xl uppercase text-green-400 z-20 typewriter">
        Fight Cybercrime. Stay Secure.
      </h1>
      <button className="mt-8 px-8 py-4 text-xl font-mono text-black bg-green-400 border-none rounded hover:bg-green-500 transition-colors cursor-pointer z-20">
        Report Cybercrime Now
      </button>
    </section>
  );
};

export default Hero;