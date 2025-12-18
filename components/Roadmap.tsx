import React from 'react';
import { RoadmapItem } from '../types';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const phases: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Launch Madness",
    color: "bg-malon-green",
    items: ["Coin Launch 🚀", "Website Live 🌐", "Logo & Memes 🎨", "Community Build (TG/X)"]
  },
  {
    phase: "Phase 2",
    title: "Luxury Hype",
    color: "bg-malon-gold",
    items: ["Influencer Marketing", "Meme Contests", "DEX Listing", "Community Giveaways"]
  },
  {
    phase: "Phase 3",
    title: "Crazy Empire",
    color: "bg-malon-pink",
    items: ["NFT (Luxury Theme)", "Big Partnerships", "CEX Push (Future)", "Massive Burns 🔥"]
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-malon-dark border-t-4 border-black">
      <div className="container mx-auto px-4">
        <SectionTitle title="The Road to Riches" subtitle="We build. We meme. We rise together." color="pink" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`border-4 border-black p-8 shadow-brutal relative ${phase.color} text-black group hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-black text-white flex items-center justify-center font-display text-2xl border-4 border-white rotate-12 group-hover:rotate-0 transition-transform">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-body font-bold uppercase tracking-widest mb-2 border-b-2 border-black pb-2 inline-block">
                {phase.phase}
              </h3>
              <h2 className="text-3xl md:text-4xl font-display uppercase leading-tight mb-6">
                {phase.title}
              </h2>
              
              <ul className="space-y-4">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-bold font-body text-lg">
                    <span className="w-4 h-4 bg-black block shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;