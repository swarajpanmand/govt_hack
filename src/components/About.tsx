import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 px-8 bg-neutral-900 text-center">
      <div
        ref={ref}
        className={`transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <h2 className="text-4xl mb-4 text-green-400">About Us</h2>
        <p className="text-base text-gray-300 max-w-3xl mx-auto">
          We are dedicated to combating cybercrime and ensuring a safe digital environment for everyone. 
          Our platform allows you to report cybercrimes, access safety tips, and stay informed about the latest threats.
        </p>
      </div>
    </section>
  );
};

export default About;