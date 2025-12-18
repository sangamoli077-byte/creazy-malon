import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: 'gold' | 'green' | 'pink';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, color = 'gold' }) => {
  const colorClass = color === 'gold' ? 'text-malon-gold' : color === 'green' ? 'text-malon-green' : 'text-malon-pink';
  
  return (
    <div className="text-center mb-16 relative">
      <h2 className={`text-5xl md:text-7xl font-display uppercase ${colorClass} drop-shadow-[4px_4px_0_rgba(255,255,255,0.2)]`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl md:text-2xl font-body max-w-2xl mx-auto text-white/90">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-2 bg-white mx-auto mt-6"></div>
    </div>
  );
};

export default SectionTitle;