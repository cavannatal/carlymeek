import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    className="text-white hover:text-gray-200 transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      setIsOpen(false); // Close mobile menu if open
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 ">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-light tracking-wide text-white">CARLY'S CHAIR</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><NavLink href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</NavLink></li>
            <li><NavLink href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</NavLink></li>
            <li><NavLink href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</NavLink></li>
            <li><NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</NavLink></li>
          </ul>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black bg-opacity-25"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><NavLink href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</NavLink></li>
            <li><NavLink href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</NavLink></li>
            <li><NavLink href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</NavLink></li>
            <li><NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</NavLink></li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;