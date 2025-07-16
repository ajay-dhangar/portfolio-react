// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
// import { gsap } from 'gsap';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = ['About', 'Projects', 'Experience', 'Contact'];

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   const items = document.querySelectorAll('.nav-item');
  //   if (items.length > 0) {
  //     gsap.from(items, {
  //       y: -30,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: 'power2.out',
  //     });
  //   }
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'}
      backdrop-blur-md border-b`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="nav-item">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <a onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-purple-500 transition-colors duration-200">
                Ajay Dhangar
              </a>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-item transition-colors duration-200 hover:text-purple-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {[{
              href: "https://github.com/ajay-dhangar",
              Icon: Github
            }, {
              href: "https://linkedin.com/in/ajay-dhangar",
              Icon: Linkedin
            }].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-item p-2 rounded-full transition-colors duration-200 hover:bg-purple-500 hover:text-white ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <Icon size={20} />
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`nav-item p-2 rounded-full transition-colors duration-200 hover:bg-purple-500 hover:text-white ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`text-xl p-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`text-xl p-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-t`}>
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-left transition-colors duration-200 hover:text-purple-500 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/ajay-dhangar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-200 hover:bg-purple-500 hover:text-white ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ajay-dhangar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-200 hover:bg-purple-500 hover:text-white ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:ajaydhangar49@gmail.com"
                  className={`p-2 rounded-full transition-colors duration-200 hover:bg-purple-500 hover:text-white ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
