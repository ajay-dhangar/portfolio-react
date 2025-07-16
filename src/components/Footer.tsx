import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-t ${
      darkMode ? 'border-gray-700' : 'border-gray-200'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-purple-600 text-gray-300' 
                : 'bg-white hover:bg-purple-500 text-gray-700 hover:text-white'
            } shadow-lg hover:shadow-xl`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <div className="text-center">
            <p className={`flex items-center justify-center gap-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Made with <Heart size={16} className="text-red-500" /> by Ajay Dhangar
            </p>
            <p className={`text-sm mt-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © 2025 Ajay Dhangar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
