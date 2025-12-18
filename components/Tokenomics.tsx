import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TokenomicsData } from '../types';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const data: TokenomicsData[] = [
  { name: 'Liquidity Pool', value: 70, fill: '#39FF14' }, // Green
  { name: 'Community & Airdrop', value: 20, fill: '#FF00FF' }, // Pink
  { name: 'Team (Locked)', value: 10, fill: '#FFD700' }, // Gold
];

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 bg-malon-black border-t-4 border-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 text-9xl opacity-5 select-none animate-pulse">💎</div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-5 select-none animate-pulse">💰</div>

      <div className="container mx-auto px-4">
        <SectionTitle title="Tokenomics" subtitle="1,000,000,000 Total Supply. Simple. Transparent. Crazy." />

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Chart */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-[400px] bg-malon-dark border-4 border-malon-gold shadow-brutal rounded-xl p-4 relative"
          >
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#000"
                    strokeWidth={4}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '2px solid #fff', borderRadius: '0px' }}
                    itemStyle={{ color: '#fff', fontFamily: 'Space Grotesk' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-display text-white pointer-events-none">
                1B SUPPLY
              </div>
          </motion.div>

          {/* Legend / Details */}
          <div className="w-full md:w-1/2 space-y-6">
            {data.map((item, index) => (
              <motion.div 
                key={item.name}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-black border-4 border-black p-6 shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 border-2 border-black" style={{ backgroundColor: item.fill }}></div>
                    <h3 className="text-xl md:text-2xl font-bold font-display uppercase">{item.name}</h3>
                  </div>
                  <span className="text-3xl font-display">{item.value}%</span>
                </div>
                <p className="mt-2 font-body text-sm font-bold opacity-80">
                  {index === 0 && "Strong liquidity for smooth trading. Low volatility."}
                  {index === 1 && "Early supporters rewards, Airdrops & giveaways."}
                  {index === 2 && "Fully locked. Transparency & trust first."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;