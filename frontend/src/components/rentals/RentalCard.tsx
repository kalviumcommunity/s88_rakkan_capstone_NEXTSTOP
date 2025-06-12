import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users } from 'lucide-react';

interface RentalCardProps {
  rental: {
    id: string;
    name: string;
    type: string;
    description: string;
    image: string;
    pricePerDay: number;
    location: string;
    state: string;
    rating: number;
    capacity: number;
  };
}

const RentalCard: React.FC<RentalCardProps> = ({ rental }) => {
  return (
    <Link
      to={`/rentals/${rental.id}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-lg 
        hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={rental.image}
          alt={rental.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Type Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium
          bg-white/90 text-gray-900">
          {rental.type}
        </span>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full
          bg-primary-500 text-white text-sm font-medium">
          <Star size={14} fill="currentColor" />
          <span>{rental.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
              {rental.name}
            </h3>
            <div className="mt-2 flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span className="text-sm">{rental.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-lg font-semibold text-primary-600">
              ₹{rental.pricePerDay}
            </div>
            <div className="text-sm text-gray-500">per day</div>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {rental.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} />
            <span className="text-sm">{rental.capacity} persons</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 
            group-hover:text-primary-700 group-hover:gap-2 transition-all">
            View Details 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RentalCard;