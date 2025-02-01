import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileDown, HelpCircle, PenTool as Tool } from 'lucide-react';

const resources = [
  {
    title: 'Safety Guides',
    description: 'Download our comprehensive safety guides.',
    action: 'Download',
    Icon: FileDown,
  },
  {
    title: 'FAQs',
    description: 'Find answers to common questions.',
    action: 'Read More',
    Icon: HelpCircle,
  },
  {
    title: 'Tools',
    description: 'Use our tools to check your online safety.',
    action: 'Explore',
    Icon: Tool,
  },
];

const Resources = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resources" className="py-16 px-8 bg-black text-center">
      <h2 className="text-4xl mb-8 text-green-400">Resources</h2>
      <div
        ref={ref}
        className="flex justify-center gap-8 flex-wrap"
      >
        {resources.map(({ title, description, action, Icon }, index) => (
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
            <p className="text-gray-300 mb-4">{description}</p>
            <a
              href="#"
              className="text-green-400 font-bold hover:text-green-500 transition-colors"
            >
              {action}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;