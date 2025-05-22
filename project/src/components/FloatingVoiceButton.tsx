import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

const FloatingVoiceButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <a
      href="https://elevenlabs.io/app/talk-to?agent_id=agent_01jvprt5pwfwxsysnddrxrf6yp"
      className={`fixed right-6 bottom-6 w-14 h-14 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      target="_blank"
      rel="noreferrer"
      aria-label="Talk to our AI Assistant"
    >
      <Mic size={24} />
      <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Talk to AI
      </span>
    </a>
  );
};

export default FloatingVoiceButton;