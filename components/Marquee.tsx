import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '', speed = 20 }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex border-y-4 border-black ${className}`}>
      <motion.div
        className="flex shrink-0 gap-8 py-3"
        initial={{ x: direction === 'left' ? 0 : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl md:text-4xl font-display uppercase tracking-widest px-4">
            {text} •
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex shrink-0 gap-8 py-3"
        initial={{ x: direction === 'left' ? 0 : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={`dup-${i}`} className="text-2xl md:text-4xl font-display uppercase tracking-widest px-4">
            {text} •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;