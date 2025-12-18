import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "YOUR_TOKEN_ADDRESS_HERE_CHANGE_ME_LATER";

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-malon-black pt-20">
      
      {/* Background Noise/Grid */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-malon-pink text-white px-6 py-2 border-2 border-white shadow-brutal-sm font-bold font-body uppercase tracking-widest mb-8 rotate-[-2deg]"
        >
          From Heist to High Life
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-7xl md:text-9xl font-display uppercase text-malon-gold drop-shadow-[8px_8px_0_#fff] mb-4 leading-none"
        >
          Crazy <br className="md:hidden" /> <span className="text-stroke-3 text-transparent bg-clip-text bg-gradient-to-r from-malon-green to-malon-gold">Malon</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-white font-body max-w-2xl mb-10"
        >
          Crazy Never Sleeps. Join the 1 Billion Supply Revolution.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl justify-center mb-12">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex-1 bg-malon-green text-black font-display text-2xl py-4 px-8 border-4 border-black shadow-brutal uppercase text-center flex items-center justify-center gap-2"
          >
            Buy Now 🚀
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#community"
            className="flex-1 bg-white text-black font-display text-2xl py-4 px-8 border-4 border-black shadow-brutal uppercase text-center"
          >
            Join TG ✈️
          </motion.a>
        </div>

        {/* CA Box */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-2xl bg-malon-dark border-2 border-malon-gold p-4 flex flex-col md:flex-row items-center gap-4 rounded-lg"
        >
          <span className="text-malon-gold font-bold font-body whitespace-nowrap">CA:</span>
          <code className="flex-1 font-mono text-sm md:text-base text-gray-300 break-all bg-black/50 p-2 rounded">
            {tokenAddress}
          </code>
          <button 
            onClick={handleCopy}
            className="bg-malon-gold text-black p-2 border-2 border-black hover:bg-white transition-colors"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mt-12"
        >
           {/* Placeholder for character art */}
           <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.5)]">
             <img src="https://picsum.photos/400/400?random=1" className="w-full h-full object-cover" alt="Crazy Malon" />
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;