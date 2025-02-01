import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-8 bg-neutral-900 text-center text-green-400">
      <div className="flex justify-center gap-4 mb-4">
        {[
          { Icon: Facebook, label: 'Facebook' },
          { Icon: Twitter, label: 'Twitter' },
          { Icon: Linkedin, label: 'LinkedIn' },
        ].map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            className="text-green-400 hover:text-green-500 transition-colors"
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
      <p className="text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Cybercrime.gov.in. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;