import React from 'react';
import { useInView } from 'react-intersection-observer';
import DashboardContent from './DashboardContent';

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
        <h2 className="text-3xl font-bold mb-4 text-white">Statistics</h2>
        <DashboardContent/>

    </section>
  );
};

export default Statistics;