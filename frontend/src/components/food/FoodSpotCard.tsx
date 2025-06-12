import React from 'react';
import { Utensils, MapPin, Star, DollarSign, Clock, Phone, Globe } from 'lucide-react';
import type { FoodSpot } from '../../types';

interface FoodSpotCardProps {
  foodSpot: FoodSpot;
}

const FoodSpotCard: React.FC<FoodSpotCardProps> = ({ foodSpot }) => {
  const getPriceLevelCount = (level: string) => {
    switch (level) {
      case 'budget': return 1;
      case 'moderate': return 2;
      case 'expensive': return 3;
      case 'luxury': return 4;
      default: return 1;
    }
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={foodSpot.image}
          alt={foodSpot.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-gray-900 text-sm font-medium">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span>{foodSpot.rating.toFixed(1)}</span>
        </div>

        {/* Price Level */}
        <div className="absolute top-4 right-4 flex items-center gap-0.5 px-2 py-1 rounded-full bg-white/90">
          {Array(getPriceLevelCount(foodSpot.priceLevel))
            .fill(0)
            .map((_, i) => (
              <DollarSign key={i} size={14} className="text-green-600" />
            ))}
        </div>

        {/* Title and Cuisine - Overlaid on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1 drop-shadow-md">
            {foodSpot.name}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <Utensils size={14} />
            <span>{foodSpot.cuisine}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin size={16} className="text-gray-400" />
          <span>{foodSpot.location}</span>
        </div>

        {/* Timings */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Clock size={16} className="text-gray-400" />
          <span>{foodSpot.timings.open} - {foodSpot.timings.close}</span>
        </div>

        {/* Specialties */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {foodSpot.specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-2 py-1 text-xs font-medium rounded-full bg-primary-50 text-primary-700"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Features</h4>
          <div className="flex flex-wrap gap-2">
            {foodSpot.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex gap-4">
            {foodSpot.contactInfo.phone && (
              <a
                href={`tel:${foodSpot.contactInfo.phone}`}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Phone size={18} />
              </a>
            )}
            {foodSpot.contactInfo.website && (
              <a
                href={foodSpot.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Globe size={18} />
              </a>
            )}
          </div>
          <button className="px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodSpotCard;