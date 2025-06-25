import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Name and Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Ramtanay Chakraborty</h3>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle - Navigation */}
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#blog" className="hover:text-blue-500 transition">Blog</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Right - Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="ramtanayc@gmailcom" className="hover:text-blue-500" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/ramtanay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ramtanay-chakraborty-279b78244" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
