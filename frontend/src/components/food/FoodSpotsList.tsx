import React, { useState } from 'react';
import { foodSpots } from '../../data/mockData';
import FoodSpotCard from './FoodSpotCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { FoodSpot } from '../../types';

const priceFilters = ['All', 'Budget', 'Moderate', 'Expensive', 'Luxury'];
const cuisineFilters = ['All', 'North Indian', 'South Indian Coastal', 'Indian Street Food', 'Multi-Regional Indian'];

const FoodSpotsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredSpots = foodSpots.filter((spot: FoodSpot) => {
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = selectedPrice === 'All' || spot.priceLevel === selectedPrice.toLowerCase();
    const matchesCuisine = selectedCuisine === 'All' || spot.cuisine === selectedCuisine;

    return matchesSearch && matchesPrice && matchesCuisine;
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Local Cuisine & Food Spots
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the most delicious and authentic food experiences at your destination. 
            From street food to fine dining, we've curated the best culinary experiences.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search by name, cuisine, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters Panel */}
          {isFilterOpen && (
            <div className="bg-white p-6 rounded-lg shadow-md animate-slide-up max-w-3xl mx-auto">
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="flex flex-wrap gap-2">
                  {priceFilters.map((price) => (
                    <button
                      key={price}
                      onClick={() => setSelectedPrice(price)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${selectedPrice === price
                          ? 'bg-primary-100 text-primary-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cuisine Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Cuisine Type</h3>
                <div className="flex flex-wrap gap-2">
                  {cuisineFilters.map((cuisine) => (
                    <button
                      key={cuisine}
                      onClick={() => setSelectedCuisine(cuisine)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${selectedCuisine === cuisine
                          ? 'bg-primary-100 text-primary-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                      {cuisine}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Food Spots Grid */}
        {filteredSpots.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No food spots found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpots.map((foodSpot) => (
              <FoodSpotCard key={foodSpot.id} foodSpot={foodSpot} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Discover More Food Spots
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodSpotsList;