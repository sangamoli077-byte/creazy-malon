import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-malon-black text-white selection:bg-malon-pink selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Marquee 
          text="YOU ARE NOT EARLY. YOU ARE CRAZY. 💎 LUXURY 💎 CARS 💎 PARTIES" 
          className="bg-malon-gold text-black rotate-1 scale-105 z-20 relative"
          speed={30}
        />
        
        <About />
        
        <Marquee 
          text="FROM HEIST TO HIGH LIFE • CRAZY NEVER SLEEPS • $MALON TO THE MOON" 
          className="bg-malon-pink text-white -rotate-1 scale-105 z-20 relative border-white"
          direction="right"
          speed={25}
        />

        <Tokenomics />
        <Roadmap />
      </main>

      <Footer />
    </div>
  );
}

export default App;