import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-malon-black/90 backdrop-blur-md border-b-2 border-malon-gold">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-malon-gold border-2 border-white rounded-full overflow-hidden">
                <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover" alt="Logo" />
            </div>
            <span className="text-2xl font-display text-white uppercase tracking-wider">
                $MALON
            </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white font-body font-bold hover:text-malon-gold uppercase tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
            <a href="#" className="bg-malon-gold text-black px-6 py-2 font-display uppercase border-2 border-white hover:bg-white transition-colors shadow-[4px_4px_0_0_#fff] active:translate-x-1 active:translate-y-1 active:shadow-none">
                Buy Token
            </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-malon-black border-t-2 border-malon-gold absolute w-full left-0 top-full p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-display uppercase border-b border-gray-800 pb-2 hover:text-malon-gold"
            >
              {link.name}
            </a>
          ))}
           <a href="#" className="bg-malon-gold text-black px-6 py-3 font-display uppercase text-center border-2 border-white">
                Buy Token
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;