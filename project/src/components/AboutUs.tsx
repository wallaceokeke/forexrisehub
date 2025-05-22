import React from 'react';
import { useInView } from '../hooks/useInView';
import { Users, Target, Rocket } from 'lucide-react';

const AboutUs: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 gradient-blur"></div>
      </div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000 ease-out`}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative glass-effect rounded-2xl p-2 glow">
                <img 
                  src="https://ik.imagekit.io/awyppiw5i/CEO-FOUNDER1.jpg?updatedAt=1747770187742" 
                  alt="Wallace Brown, CEO of LeadDevCorps" 
                  className="relative rounded-xl shadow-2xl w-full max-w-md object-cover h-[500px]"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 backdrop-blur-sm mb-6">
              <Users size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Leading Africa's Tech Revolution
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Wallace Brown
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Visionary CEO & Founder pioneering the integration of AI and cutting-edge technology to transform African businesses and drive continental innovation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-2 text-white">
                    <Target size={24} />
                  </div>
                  <h4 className="text-xl font-semibold ml-3 text-gray-800 dark:text-gray-200">Our Mission</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  To democratize access to AI technology across Africa, enabling businesses of all sizes to harness the power of intelligent systems for growth and innovation.
                </p>
              </div>
              
              <div className="glass-effect rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-2 text-white">
                    <Rocket size={24} />
                  </div>
                  <h4 className="text-xl font-semibold ml-3 text-gray-800 dark:text-gray-200">Our Vision</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  A future where African businesses lead global innovation through accessible, powerful AI tools and a thriving community of tech enthusiasts and developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;