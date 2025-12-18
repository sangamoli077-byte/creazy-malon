import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-black border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-6xl font-display uppercase text-black mb-8 leading-none">
              Who is <span className="text-malon-pink underline decoration-4 decoration-wavy">Crazy Malon?</span>
            </h2>
            
            <div className="space-y-6 font-body text-xl font-medium">
              <p>
                Crazy Malon is a legendary, mysterious character. He doesn't just want money; he wants the <strong className="bg-malon-gold px-1">LIFESTYLE</strong>.
              </p>
              
              <ul className="grid grid-cols-2 gap-4 my-8">
                {['💎 Luxury Cars', '⌚ Diamond Watches', '🏝️ Private Villas', '🍾 Crazy Parties'].map((item) => (
                  <li key={item} className="flex items-center gap-2 bg-malon-black text-white p-3 border-2 border-black shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="border-l-8 border-malon-gold pl-6 py-2 italic text-2xl">
                "This coin does not promote real crime. It represents CRAZY AMBITION, RISK, LUXURY & MEME CULTURE."
              </p>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square bg-malon-gold border-4 border-black shadow-brutal rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
               <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Crazy Malon Character" 
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="absolute bottom-4 left-4 text-white font-display text-4xl uppercase">
                 The Legend
               </div>
            </div>
          </motion.div>

        </div>

        {/* What is Malon Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "Luxury Lovers", desc: "For those who dream big.", icon: "🥂" },
             { title: "Bold & Fearless", desc: "Scared money don't make money.", icon: "🦁" },
             { title: "Community Driven", desc: "We rise together.", icon: "🤝" },
             { title: "No Rules", desc: "Only Crazy Energy.", icon: "😈" }
           ].map((card, i) => (
             <motion.div 
               key={i}
               whileHover={{ scale: 1.05 }}
               className="bg-malon-black text-white border-2 border-malon-green p-6 text-center shadow-[4px_4px_0px_0px_#39FF14]"
             >
               <div className="text-4xl mb-4">{card.icon}</div>
               <h3 className="font-display text-xl uppercase mb-2 text-malon-gold">{card.title}</h3>
               <p className="font-body text-sm text-gray-300">{card.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default About;