import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GameCard = ({ title, genre, description, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative rounded-xl overflow-hidden bg-[#111] border border-[#00D9FF]/20 hover:border-[#00D9FF] transition-colors duration-300"
  >
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
      
      <div className="absolute top-4 right-4 px-3 py-1 bg-[#00D9FF]/20 backdrop-blur-sm border border-[#00D9FF]/50 rounded text-[#00D9FF] font-rajdhani text-sm font-bold uppercase tracking-wider">
        Free To Play
      </div>
    </div>
    
    <div className="p-6 relative">
      <div className="absolute -top-6 left-6 px-3 py-1 bg-[#00FF41] text-black font-rajdhani font-bold text-xs uppercase tracking-widest rounded-sm">
        {genre}
      </div>
      
      <h3 className="text-2xl font-bold font-orbitron text-white mb-2 uppercase tracking-wide group-hover:text-[#00D9FF] transition-colors">{title}</h3>
      <p className="text-gray-400 font-rajdhani text-lg mb-6 line-clamp-2">{description}</p>
      
      <button className="w-full py-3 px-4 rounded border border-[#00D9FF]/50 text-[#00D9FF] font-orbitron text-sm font-bold uppercase tracking-wider hover:bg-[#00D9FF] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group/btn">
        <span>Learn More</span>
        <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const FeaturedGames = () => {
  const games = [
    {
      title: "Project Zero",
      genre: "FPS / Shooter",
      description: "A fast-paced tactical shooter focusing on team coordination and precise aiming in zero-gravity environments.",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f"
    },
    {
      title: "Neon Drift",
      genre: "Racing",
      description: "Cyberpunk aesthetic racing game with high-speed drifting mechanics and deep vehicle customization.",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e"
    },
    {
      title: "Realm of Shadows",
      genre: "MMORPG",
      description: "Explore a vast dark fantasy world, conquer massive dungeons, and build your legend in this free MMORPG.",
      image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f"
    }
  ];

  return (
    <section id="games" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-2 text-white"
            >
              Featured <span className="text-[#FFD700]">Free Games</span>
            </motion.h2>
            <div className="h-1 w-24 bg-[#FFD700] rounded"></div>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#join"
            className="text-[#00D9FF] hover:text-white font-rajdhani font-bold text-lg uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            See All in Discord <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, idx) => (
            <GameCard key={idx} {...game} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;