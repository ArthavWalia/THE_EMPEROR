import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import FilterBar from '@/components/FilterBar';
import AnimeGrid from '@/components/AnimeGrid';
import { animeData } from '@/data/animeData';

function RecommendationPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    genres: [],
    types: [],
    episodeCounts: [],
    ratings: [],
    moods: [],
    statuses: []
  });

  const filteredAnime = useMemo(() => {
    return animeData.filter((anime) => {
      // Genre filter (OR logic within category)
      if (selectedFilters.genres.length > 0) {
        const hasMatchingGenre = selectedFilters.genres.some(genre =>
          anime.genres.includes(genre)
        );
        if (!hasMatchingGenre) return false;
      }

      // Type filter
      if (selectedFilters.types.length > 0) {
        if (!selectedFilters.types.includes(anime.type)) return false;
      }

      // Episode count filter
      if (selectedFilters.episodeCounts.length > 0) {
        const matchesEpisodeCount = selectedFilters.episodeCounts.some(range => {
          if (range === '1-12') return anime.episodes >= 1 && anime.episodes <= 12;
          if (range === '13-24') return anime.episodes >= 13 && anime.episodes <= 24;
          if (range === '25-50') return anime.episodes >= 25 && anime.episodes <= 50;
          if (range === '50+') return anime.episodes > 50;
          return false;
        });
        if (!matchesEpisodeCount) return false;
      }

      // Rating filter
      if (selectedFilters.ratings.length > 0) {
        const matchesRating = selectedFilters.ratings.some(rating => {
          const minRating = parseFloat(rating.replace('+', ''));
          return anime.rating >= minRating;
        });
        if (!matchesRating) return false;
      }

      // Mood filter
      if (selectedFilters.moods.length > 0) {
        if (!selectedFilters.moods.includes(anime.mood)) return false;
      }

      // Status filter
      if (selectedFilters.statuses.length > 0) {
        if (!selectedFilters.statuses.includes(anime.status)) return false;
      }

      return true;
    });
  }, [selectedFilters]);

  return (
    <>
      <Helmet>
        <title>Anime Recommendations - Find Your Next Favorite Anime</title>
        <meta
          name="description"
          content="Discover and filter through the best anime recommendations. Browse by genre, rating, mood, and more to find your perfect next watch."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
        {/* Hero Section */}
        <div className="relative overflow-hidden border-b border-[#8338ec]/20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8338ec]/10 via-[#ff006e]/10 to-[#00d4ff]/10 animate-gradient-shift" />
          <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-[#00d4ff] animate-pulse" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#8338ec] to-[#ff006e] bg-clip-text text-transparent">
                  Anime Recommendations
                </h1>
                <Sparkles className="w-8 h-8 text-[#ff006e] animate-pulse" />
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover your next favorite anime with our advanced filtering system. 
                Explore {animeData.length} carefully curated recommendations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          selectedFilters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />

        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <p className="text-gray-400 text-sm">
              Showing <span className="text-[#00d4ff] font-bold">{filteredAnime.length}</span> of{' '}
              <span className="text-white font-bold">{animeData.length}</span> anime
            </p>
          </motion.div>

          <AnimeGrid anime={filteredAnime} />
        </div>
      </div>
    </>
  );
}

export default RecommendationPage;