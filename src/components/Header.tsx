import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-neutral-900 px-8 py-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold text-green-400">Cybercrime.gov.in</div>
      <nav>
        {['About', 'Services', 'Statistics', 'Resources'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-green-400 no-underline mx-4 text-base hover:text-green-500 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;