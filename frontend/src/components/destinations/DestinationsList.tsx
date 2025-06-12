import { useState } from 'react';
import { Search } from 'lucide-react';
import DestinationCard from './DestinationCard';
import { mockDestinations } from '../../data/mockData';

const categories = [
  'All',
  'Historical',
  'Nature',
  'Adventure',
  'Cultural',
  'Religious',
  'Beach',
  'Mountain'
];

const DestinationsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = mockDestinations.filter(dest => {
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore India's Finest Destinations
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From majestic mountains to pristine beaches, ancient temples to vibrant cities,
            discover the incredible diversity of India.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative animate-slide-up">
            <input
              type="text"
              placeholder="Search destinations by name or state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center animate-slide-up delay-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No destinations found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in delay-200">
            {filteredDestinations.map((destination, index) => (
              <div 
                key={destination._id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-primary px-8 py-3">
            Discover More Destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsList;