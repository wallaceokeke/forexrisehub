import React from 'react';
import { MessageCircle, Instagram, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">LeadDevCorps</h3>
            <p className="text-gray-400 mb-6">
              Innovating Africa's future through AI, smart automation, and community-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://chat.whatsapp.com/K6a915kz7CmEsdWw6mFgMq"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Group"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/sha_ku.r"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/wallaceokeke"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/wallace-brown-3908652b0"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a 
                  href="https://elevenlabs.io/app/talk-to?agent_id=agent_01jvprt5pwfwxsysnddrxrf6yp"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voice Assistant
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">AI Agent Development</li>
              <li className="text-gray-400">POS & Inventory Systems</li>
              <li className="text-gray-400">Business Automation Tools</li>
              <li className="text-gray-400">Software & Technical Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:okekewallace@gmail.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  okekewallace@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+254706142076"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  +254 0706 142076
                </a>
              </li>
              <li>
                <a 
                  href="https://chat.whatsapp.com/K6a915kz7CmEsdWw6mFgMq"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join WhatsApp Group
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LeadDevCorps. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;