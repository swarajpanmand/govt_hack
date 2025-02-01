import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileDown, HelpCircle, PenTool as Tool } from 'lucide-react';
import CourseSection from './CourseSection';

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
      {/* <h2 className="text-4xl mb-8 text-green-400">Resources</h2> */}
      <CourseSection/>
    </section>
  );
};

export default Resources;