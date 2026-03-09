import React from 'react';
import { motion } from 'framer-motion';
import { X, Filter } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function FilterBar({ selectedFilters, onFilterChange }) {
  const filterSections = [
    {
      title: 'Genre',
      key: 'genres',
      options: [
        'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror',
        'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports',
        'Supernatural', 'Thriller', 'Mecha', 'Psychological'
      ]
    },
    {
      title: 'Type',
      key: 'types',
      options: ['TV', 'Movie', 'OVA']
    },
    {
      title: 'Episode Count',
      key: 'episodeCounts',
      options: ['1-12', '13-24', '25-50', '50+']
    },
    {
      title: 'Rating',
      key: 'ratings',
      options: ['7.0+', '8.0+', '8.5+', '9.0+']
    },
    {
      title: 'Mood',
      key: 'moods',
      options: ['Dark', 'Lighthearted', 'Intense', 'Emotional', 'Comedic']
    },
    {
      title: 'Status',
      key: 'statuses',
      options: ['Completed', 'Ongoing', 'Upcoming']
    }
  ];

  const handleToggle = (category, value) => {
    const currentValues = selectedFilters[category] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange({ ...selectedFilters, [category]: newValues });
  };

  const handleClearAll = () => {
    onFilterChange({
      genres: [],
      types: [],
      episodeCounts: [],
      ratings: [],
      moods: [],
      statuses: []
    });
  };

  const getTotalFiltersCount = () => {
    return Object.values(selectedFilters).reduce((sum, arr) => sum + arr.length, 0);
  };

  return (
    <div className="sticky top-0 z-30 bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]/95 backdrop-blur-lg border-b border-[#8338ec]/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#8338ec] flex items-center justify-center">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Filters</h2>
              <p className="text-sm text-gray-400">
                {getTotalFiltersCount()} filter{getTotalFiltersCount() !== 1 ? 's' : ''} applied
              </p>
            </div>
          </div>
          
          {getTotalFiltersCount() > 0 && (
            <Button
              onClick={handleClearAll}
              variant="outline"
              className="bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-200"
            >
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>

        {/* Filter Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {filterSections.map((section) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.options.map((option) => {
                  const isChecked = (selectedFilters[section.key] || []).includes(option);
                  
                  return (
                    <div
                      key={option}
                      className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? 'bg-gradient-to-r from-[#8338ec]/20 to-[#ff006e]/20 border border-[#8338ec]/50'
                          : 'bg-[#16213e]/40 border border-transparent hover:border-[#8338ec]/30 hover:bg-[#16213e]/60'
                      }`}
                      onClick={() => handleToggle(section.key, option)}
                    >
                      <Checkbox
                        id={`${section.key}-${option}`}
                        checked={isChecked}
                        onCheckedChange={() => handleToggle(section.key, option)}
                        className="border-gray-500 data-[state=checked]:bg-[#8338ec] data-[state=checked]:border-[#8338ec]"
                      />
                      <Label
                        htmlFor={`${section.key}-${option}`}
                        className={`text-sm cursor-pointer transition-colors duration-200 ${
                          isChecked ? 'text-white font-medium' : 'text-gray-400'
                        }`}
                      >
                        {option}
                      </Label>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;