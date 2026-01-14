import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Operations', href: '#services' },
    { name: 'Intel', href: '#about' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="mx-auto max-w-[90vw] md:max-w-7xl">
        <div 
          className={`relative flex items-center justify-between px-6 py-4 rounded-xl backdrop-blur-md border border-v-sage/20 transition-all duration-300 ${
            scrolled ? 'bg-v-dark/80 shadow-lg' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-v-orange rounded-full animate-pulse" />
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              Vanguard
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-v-sage hover:text-white transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="group relative px-6 py-2 bg-transparent overflow-hidden border border-v-orange text-v-orange hover:text-white transition-colors duration-300">
              <span className="absolute inset-0 w-full h-full bg-v-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                Deploy Team <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-v-sage"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 right-0 mx-4 bg-v-dark border border-v-sage/20 rounded-xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg text-v-sage hover:text-v-orange uppercase tracking-widest border-b border-v-sage/10 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 w-full py-3 bg-v-orange text-v-dark font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Initialize
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;