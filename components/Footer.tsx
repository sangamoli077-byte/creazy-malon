import React from 'react';
import { Twitter, Send, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="community" className="bg-malon-green text-black border-t-8 border-black py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-display uppercase mb-6 leading-none">
          Join the <br/> Madness
        </h2>
        <p className="font-body text-xl font-bold mb-10 max-w-2xl mx-auto">
          Crazy Malon is nothing without community. You are not early. You are CRAZY.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-3xl hover:bg-white hover:text-black hover:scale-110 transition-all border-4 border-black">
            <Send size={32} />
          </a>
          <a href="#" className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-3xl hover:bg-white hover:text-black hover:scale-110 transition-all border-4 border-black">
            <Twitter size={32} />
          </a>
          <a href="#" className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-3xl hover:bg-white hover:text-black hover:scale-110 transition-all border-4 border-black">
            <Disc size={32} />
          </a>
        </div>

        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center font-bold font-body text-sm">
          <p>© 2024 CRAZY MALON. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Not Financial Advice. Just Crazy Vibes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;