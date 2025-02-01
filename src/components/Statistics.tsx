import React from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '10,000+', label: 'Cybercrimes Reported' },
  { value: '95%', label: 'Cases Resolved' },
  { value: '24/7', label: 'Support Available' },
];

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="statistics" className="py-16 px-8 bg-neutral-900 text-center">
      <h2 className="text-4xl mb-8 text-green-400">Statistics</h2>
      <div
        ref={ref}
        className="flex justify-center gap-8 flex-wrap"
      >
        {stats.map(({ value, label }, index) => (
          <div
            key={label}
            className={`bg-neutral-800 text-green-400 p-8 rounded-lg w-[200px] text-center transform transition-all duration-1000 ${
              inView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <h3 className="text-4xl mb-2">{value}</h3>
            <p className="text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;