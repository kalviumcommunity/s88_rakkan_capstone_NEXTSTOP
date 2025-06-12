import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = 16,
  className = '' 
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className={`flex items-center ${className}`}>
      {Array(fullStars).fill(0).map((_, i) => (
        <Star key={`full-${i}`} size={size} className="text-yellow-500 fill-yellow-500" />
      ))}
      
      {hasHalfStar && (
        <StarHalf size={size} className="text-yellow-500 fill-yellow-500" />
      )}
      
      {Array(emptyStars).fill(0).map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-yellow-500" />
      ))}
      
      <span className="ml-1 text-gray-700">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;