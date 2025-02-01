import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Users, Globe } from 'lucide-react';

const About = () => {
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-8 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={contentRef}
            className={`transform transition-all duration-1000 ${contentInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
          >
            <div className="flex items-center space-x-4 mb-8">
              {/* <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="Government of India Emblem" 
                className="w-14 h-14 object-contain"
              /> */}
              
              <h2 className="text-6xl font-semibold tracking-tight">About Us</h2>
            </div>

            <div className="space-y-6 ">
              <p className="leading-relaxed h-32">
                The <span className="font-semibold">Indian Cyber Crime Coordination Centre (I4C)</span>, under the <span className="font-semibold">Ministry of Home Affairs</span>, is a state-of-the-art facility dedicated to dealing with cybercrime in a coordinated and comprehensive manner.
              </p>
              
              {/* <div className="grid grid-cols-2 gap-6 mt-8">
                {[{ icon: Shield, title: 'National Security', desc: 'Protecting India's digital infrastructure' },
                  { icon: Lock, title: 'Cyber Security', desc: 'Advanced threat detection & prevention' },
                  { icon: Users, title: 'Citizen Support', desc: '24/7 assistance for cybercrime victims' },
                  { icon: Globe, title: 'Global Cooperation', desc: 'International cybercrime prevention' }].map(({ icon: Icon, title, desc }, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">{title}</h3>
                        <p className="text-sm">{desc}</p>
                      </div>
                    </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Right Content */}
          <div
            ref={statsRef}
            className={`relative transform transition-all duration-1000 ${statsInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
          >
            <div className="relative">
              <img
                src="https://imgs.search.brave.com/kMGl3qf1I8dyr4VqACkFY-NYmu-COLnps49H5MP-8Ws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG1pbmRpYS5nb3Yu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTIvTW9kaS1K/aS1QaG90by0wMi1l/MTY0NzMyNTkzNjgy/MS5qcGc"
                alt="Prime Minister Modi"
                className="rounded-lg shadow-lg w-full object-cover h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg"></div>
            </div>
            <div className="absolute -top-8 right-0 w-16 h-16">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
