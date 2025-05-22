import React from 'react';
import { Bot, Sparkles, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-blur"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="max-w-4xl relative">
          <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-blue-500 to-transparent"></div>
          
          <div className="mb-8 flex items-center space-x-2">
            <div className="flex items-center px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 backdrop-blur-sm">
              <Cpu size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">AI-Powered Innovation</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 leading-tight">
            Shaping Africa's Digital Future
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
            Pioneering next-generation AI solutions that transform businesses and drive innovation across the African continent.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a
              href="https://elevenlabs.io/app/talk-to?agent_id=agent_01jvprt5pwfwxsysnddrxrf6yp"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              target="_blank"
              rel="noreferrer"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              <Bot size={20} className="mr-2" />
              Experience Our AI Assistant
              <div className="absolute right-0 w-12 h-full bg-gradient-to-l from-white/20 to-transparent transform translate-x-12 group-hover:translate-x-0 transition-transform"></div>
            </a>
            
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass-effect border border-white/20 hover:border-blue-500/30 text-gray-800 dark:text-gray-200 font-medium transition-all shadow-lg hover:shadow-xl backdrop-blur-lg group"
            >
              <Sparkles size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
              Explore Our Solutions
            </a>
          </div>

          <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              AI-Powered Systems
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
              Real-time Analytics
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
              Smart Automation
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;