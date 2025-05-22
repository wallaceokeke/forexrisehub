import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Community from './components/Community';
import VoiceAssistant from './components/VoiceAssistant';
import Footer from './components/Footer';
import FloatingVoiceButton from './components/FloatingVoiceButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          scrolled={scrolled}
        />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <Community />
          <VoiceAssistant />
        </main>
        <FloatingVoiceButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;