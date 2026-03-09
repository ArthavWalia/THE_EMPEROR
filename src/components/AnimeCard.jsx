import React from 'react';
import { Star, Tv as TvMinimal } from 'lucide-react';
import { motion } from 'framer-motion';

const genreColors = {
  Action: 'bg-red-500/20 text-red-400 border-red-500/30',
  Adventure: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Comedy: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Drama: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Fantasy: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Horror: 'bg-rose-700/20 text-rose-400 border-rose-700/30',
  Mystery: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  Romance: 'bg-pink-400/20 text-pink-300 border-pink-400/30',
  'Sci-Fi': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Slice of Life': 'bg-green-500/20 text-green-400 border-green-500/30',
  Sports: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Supernatural: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  Thriller: 'bg-red-700/20 text-red-300 border-red-700/30',
  Mecha: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  Psychological: 'bg-purple-700/20 text-purple-300 border-purple-700/30',
  Historical: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
  School: 'bg-sky-500/20 text-sky-400 border-sky-500/30'
};

const moodColors = {
  Dark: 'bg-gray-800/80 text-gray-200 border border-gray-600',
  Lighthearted: 'bg-yellow-500/80 text-gray-900 border border-yellow-400',
  Intense: 'bg-red-600/80 text-white border border-red-500',
  Emotional: 'bg-purple-600/80 text-white border border-purple-500',
  Comedic: 'bg-pink-500/80 text-white border border-pink-400'
};

function AnimeCard({ anime }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#16213e] to-[#0f0f1e] shadow-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
    >
      {/* Cover Image with Gradient Overlay */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={anime.coverImage}
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1e] via-transparent to-transparent opacity-60" />
        
        {/* Mood Tag - Top Right */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${moodColors[anime.mood]}`}>
            {anime.mood}
          </span>
        </div>

        {/* Status Badge - Top Left */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            anime.status === 'Ongoing' ? 'bg-green-500/80 text-white border border-green-400' :
            anime.status === 'Completed' ? 'bg-blue-500/80 text-white border border-blue-400' :
            'bg-orange-500/80 text-white border border-orange-400'
          }`}>
            {anime.status}
          </span>
        </div>

        {/* Hover Overlay with Description */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-gray-200 text-sm leading-relaxed line-clamp-4">
            {anime.description}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-xl font-bold text-white line-clamp-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#8338ec] transition-all duration-300">
          {anime.title}
        </h3>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-2">
          {anime.genres.slice(0, 3).map((genre, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-md text-xs font-medium border ${genreColors[genre] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between text-sm">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-yellow-400" />
            <span className="font-semibold">{anime.rating.toFixed(1)}</span>
          </div>

          {/* Episodes */}
          <div className="flex items-center gap-1 text-cyan-400">
            <TvMinimal className="w-4 h-4" />
            <span className="font-medium">
              {anime.episodes} {anime.type === 'Movie' ? 'Movie' : 'eps'}
            </span>
          </div>

          {/* Type */}
          <span className="px-2 py-1 rounded bg-[#8338ec]/20 text-[#8338ec] text-xs font-semibold border border-[#8338ec]/30">
            {anime.type}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default AnimeCard;