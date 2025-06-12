import React from 'react';
import { MapPin } from 'lucide-react';
import { Destination } from '../../types';
import StarRating from '../common/StarRating';
import TagBadge from '../common/TagBadge';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={destination.images[0]} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <StarRating rating={destination.averageRating} />
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-center gap-1 text-gray-500 mb-2">
          <MapPin size={16} />
          <span className="text-sm">{destination.state}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
          {destination.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {destination.highlights.map((highlight) => (
            <TagBadge key={highlight} tag={highlight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;