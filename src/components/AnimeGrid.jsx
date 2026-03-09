import React from 'react';
import { motion } from 'framer-motion';
import AnimeCard from './AnimeCard';
import { Film } from 'lucide-react';

function AnimeGrid({ anime }) {
  if (anime.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20 px-4"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8338ec] to-[#ff006e] flex items-center justify-center mb-6 animate-pulse">
          <Film className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">No Results Found</h3>
        <p className="text-gray-400 text-center max-w-md">
          We couldn't find any anime matching your filters. Try adjusting your selections or clearing filters to see more results.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {anime.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <AnimeCard anime={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AnimeGrid;