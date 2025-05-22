import React from 'react';
import { Mic, Bot, Headphones, Sparkles, Wand2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const VoiceAssistant: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blur"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur"></div>
      </div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000 ease-out`}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 backdrop-blur-sm mb-6">
            <Bot size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">AI Assistant</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-600 to-red-600">
            Experience Next-Gen AI Interaction
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Engage with our advanced AI assistant powered by cutting-edge technology. Get instant responses, detailed information, and intelligent insights.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-effect rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <Wand2 className="text-orange-500 animate-pulse" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  AI-Powered Conversations
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Our AI assistant combines natural language processing with deep industry knowledge to provide intelligent, context-aware responses to your queries.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="glass-effect rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 p-3 text-white relative">
                      <Mic size={24} />
                      <div className="absolute inset-0 rounded-lg animate-pulse-ring"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Natural Voice Interaction</h4>
                      <p className="text-gray-600 dark:text-gray-400">Speak naturally and get human-like responses</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 p-3 text-white relative">
                      <Bot size={24} />
                      <div className="absolute inset-0 rounded-lg animate-pulse-ring"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Intelligent Responses</h4>
                      <p className="text-gray-600 dark:text-gray-400">Powered by advanced AI to provide accurate information</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-effect rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-3 text-white relative">
                      <Headphones size={24} />
                      <div className="absolute inset-0 rounded-lg animate-pulse-ring"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">24/7 Availability</h4>
                      <p className="text-gray-600 dark:text-gray-400">Get answers whenever you need them</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a
                href="https://elevenlabs.io/app/talk-to?agent_id=agent_01jvprt5pwfwxsysnddrxrf6yp"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                target="_blank"
                rel="noreferrer"
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <Mic size={20} className="mr-2" />
                Start Conversation
                <div className="absolute right-0 w-12 h-full bg-gradient-to-l from-white/20 to-transparent transform translate-x-12 group-hover:translate-x-0 transition-transform"></div>
              </a>
            </div>
            
            <div className="md:w-5/12 bg-gradient-to-br from-blue-600 via-orange-600 to-red-600 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              
              <div className="relative w-full max-w-[250px] aspect-square">
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-40" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-40" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                
                <div className="relative h-full w-full rounded-full glass-effect border border-white/20 flex items-center justify-center group hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-white text-center">
                    <Mic size={80} className="mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-lg">AI Assistant Ready</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm text-white/80">Online</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Sparkles 
                className="absolute top-4 right-4 text-white/80 animate-pulse"
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAssistant;