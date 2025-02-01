import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 px-8 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="flex items-center space-x-2">
        {/* */}
        <img src = "https://imgs.search.brave.com/8YRQMaEmLGqzvd_xs9XylnLFVulzuDInol5cB2alDb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JkL0VtYmxlbV9v/Zl9JbmRpYV8oZ29s/ZCkuc3Zn" className='h-16'></img>
        <span className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
          Cybercrime.gov.in
        </span>
      </div>

      <div className="flex items-center">
        <nav className="mr-8">
          {['About', 'Services', 'Statistics', 'Resources'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 no-underline mx-4 text-base hover:text-cyan-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button className="group relative flex items-center space-x-2 px-6 py-2.5 bg-red-500/80 backdrop-blur-sm text-white rounded-lg transition-all duration-300 hover:bg-red-600/90 hover:scale-105 shadow-lg hover:shadow-red-500/20">
          <AlertTriangle className="w-5 h-5 group-hover:animate-pulse" />
          <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Report Incident</span>
        </button>
      </div>
    </header>
  );
};

export default Header;