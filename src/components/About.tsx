import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Users, Globe, AlertTriangle, BadgeAlert, Scale, Siren } from 'lucide-react';

const About = () => {
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-8 bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={contentRef}
            className={`transform transition-all duration-1000 ${contentInView ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-75"></div>
                <Shield className="w-14 h-14 relative text-white" />
              </div>
              <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">About Us</h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                The <span className="font-semibold text-blue-400">Indian Cyber Crime Coordination Centre (I4C)</span>, under the <span className="font-semibold text-blue-400">Ministry of Home Affairs</span>, stands as India's premier institution in the fight against cybercrime, equipped with cutting-edge technology and expert personnel.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                {[
                  { icon: AlertTriangle, title: 'Threat Detection', desc: 'Real-time monitoring of cyber threats' },
                  { icon: BadgeAlert, title: 'Rapid Response', desc: 'Swift action against cyber attacks' },
                  { icon: Scale, title: 'Digital Justice', desc: 'Ensuring cybercrime prosecution' },
                  { icon: Siren, title: 'Citizens Safety', desc: '24/7 cyber emergency support' }
                ].map(({ icon: Icon, title, desc }, index) => (
                  <div key={index} className="group p-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 hover:from-blue-900 hover:to-indigo-900 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <Icon className="w-6 h-6 flex-shrink-0 mt-1 text-blue-400 group-hover:text-blue-300" />
                      <div>
                        <h3 className="font-semibold text-blue-400 group-hover:text-blue-300">{title}</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            ref={statsRef}
            className={`relative transform transition-all duration-1000 ${statsInView ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src="https://imgs.search.brave.com/kMGl3qf1I8dyr4VqACkFY-NYmu-COLnps49H5MP-8Ws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG1pbmRpYS5nb3Yu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMTIvTW9kaS1K/aS1QaG90by0wMi1l/MTY0NzMyNTkzNjgy/MS5qcGc"
                  alt="Prime Minister Modi"
                  className="rounded-lg shadow-lg w-full object-cover h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-lg">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <blockquote className="text-lg italic text-gray-300">
                      "Cyber security is no longer just an IT priority but a national security priority."
                    </blockquote>
                    <p className="mt-2 text-blue-400 font-semibold">- Narendra Modi, Prime Minister of India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;