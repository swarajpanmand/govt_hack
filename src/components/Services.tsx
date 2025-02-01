import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Shield, BookOpen, Phone } from 'lucide-react';

const services = [
  {
    title: 'Report Cybercrime',
    description: 'File a complaint and track its status.',
    Icon: Shield,
  },
  {
    title: 'Cyber Safety Tips',
    description: 'Learn how to protect yourself online.',
    Icon: BookOpen,
  },
  {
    title: 'Emergency Helpline',
    description: 'Contact us for immediate assistance.',
    Icon: Phone,
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-16 px-8 bg-black">
      <div
        ref={ref}
        className="flex flex-wrap justify-center gap-8"
      >
        {services.map(({ title, description, Icon }, index) => (
          <div
            key={title}
            className={`bg-neutral-800 text-green-400 p-8 rounded-lg w-[300px] text-center transform transition-all duration-1000 ${
              inView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <Icon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl mb-4">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;