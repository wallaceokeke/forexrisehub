import React from 'react';
import { Users, MessagesSquare, Code, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Community: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 gradient-blur"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 gradient-blur"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div 
          ref={ref}
          className={`glass-effect rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-600/20"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="md:w-3/5">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm mb-6">
                <Users size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">Join Our Community</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-600 to-red-600">
                More Than a Company — We're a Movement
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                Connect with Africa's brightest minds in tech. Share ideas, collaborate on projects, and be part of the continent's digital transformation.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="glass-effect rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-3 text-white relative">
                      <Users size={24} />
                      <div className="absolute inset-0 rounded-lg animate-pulse-ring"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Network with Tech Enthusiasts</h4>
                      <p className="text-gray-600 dark:text-gray-400">Connect with developers, entrepreneurs, and AI enthusiasts.</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 p-3 text-white relative">
                      <MessagesSquare size={24} />
                      <div className="absolute inset-0 rounded-lg animate-pulse-ring"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Join Our WhatsApp Group</h4>
                      <p className="text-gray-600 dark:text-gray-400">Instant access to discussions, resources, and community support.</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-3 text-white relative">
                      <Code size={24} />
                      <div className="absolute inset-0 rounded-lg animate-pulse-ring"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Collaborative Learning</h4>
                      <p className="text-gray-600 dark:text-gray-400">Share knowledge, code, and best practices with peers.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a
                href="https://chat.whatsapp.com/K6a915kz7CmEsdWw6mFgMq"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                target="_blank"
                rel="noreferrer"
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <MessagesSquare size={20} className="mr-2" />
                Join WhatsApp Community
                <div className="absolute right-0 w-12 h-full bg-gradient-to-l from-white/20 to-transparent transform translate-x-12 group-hover:translate-x-0 transition-transform"></div>
              </a>
            </div>
            
            <div className="md:w-2/5 hidden md:block">
              <div className="relative">
                <div className="glass-effect rounded-2xl p-8 border border-white/20 relative">
                  <div className="absolute top-2 right-2">
                    <Sparkles className="text-orange-500 animate-pulse" size={20} />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass-effect rounded-lg p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                      <p className="text-gray-700 dark:text-gray-300">
                        "Joining the LeadDevCorps community has been invaluable for my startup. The connections and insights I've gained have accelerated our growth."
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                          <span className="font-semibold">EO</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">Elizabeth Omondi</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">FinTech Startup Founder</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-effect rounded-lg p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                      <p className="text-gray-700 dark:text-gray-300">
                        "The technical discussions in the WhatsApp group have helped me solve problems I'd been stuck on for weeks. Great community!"
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white">
                          <span className="font-semibold">DK</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">David Kamau</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Software Developer</p>
                        </div>
                      </div>
                    </div>
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

export default Community;