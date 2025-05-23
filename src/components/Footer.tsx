import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-bold text-xl tracking-tight">
              KS
            </a>
            <p className="mt-2 text-gray-400">
              Designed and built with ❤️ by Sanjay Ketham
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/SanjayKetham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-ketham-952485289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/sanjayketham2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Leetcode"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:kethamsanjay@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SANJAY KETHAM. All rights reserved.
          </p>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Education
                </a>
              </li>
              <li>
                <a href="#hackathons" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Hackathons
                </a>
              </li>
              
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;