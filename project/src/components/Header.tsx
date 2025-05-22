import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Bot } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Bot size={32} className="text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              LeadDevCorps
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#community" className="nav-link">Community</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a 
              href="https://elevenlabs.io/app/talk-to?agent_id=agent_01jvprt5pwfwxsysnddrxrf6yp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-medium transition-colors"
            >
              <Bot size={18} className="mr-2" />
              AI Assistant
            </a>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect mt-4 rounded-xl overflow-hidden">
            <nav className="flex flex-col space-y-2 p-4">
              <a href="#about" className="nav-link-mobile" onClick={toggleMenu}>About</a>
              <a href="#services" className="nav-link-mobile" onClick={toggleMenu}>Services</a>
              <a href="#community" className="nav-link-mobile" onClick={toggleMenu}>Community</a>
              <a href="#contact" className="nav-link-mobile" onClick={toggleMenu}>Contact</a>
              <a 
                href="https://elevenlabs.io/app/talk-to?agent_id=agent_01jvprt5pwfwxsysnddrxrf6yp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-medium transition-colors"
                onClick={toggleMenu}
              >
                <Bot size={18} className="mr-2" />
                AI Assistant
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;