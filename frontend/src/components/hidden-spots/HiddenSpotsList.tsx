import React from 'react';
import { hiddenSpots } from '../../data/mockData';
import HiddenSpotCard from './HiddenSpotCard';
import { MapPin, Plus } from 'lucide-react';

const HiddenSpotsList: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Hidden Gems & Secret Spots
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover unique places that aren't in typical travel guides, shared by fellow travelers 
              who've explored beyond the beaten path.
            </p>
          </div>
          
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors shadow-sm">
            <Plus size={18} />
            <span>Share Your Find</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hiddenSpots.map((spot) => (
            <HiddenSpotCard key={spot.id} spot={spot} />
          ))}
          
          <div className="bg-white bg-opacity-80 rounded-xl overflow-hidden shadow-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 h-full">
            <MapPin size={36} className="text-teal-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-1">Found something special?</h3>
            <p className="text-gray-600 text-center mb-4">
              Share your discovery with fellow travelers
            </p>
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors">
              <Plus size={18} />
              <span>Add Hidden Spot</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiddenSpotsList;