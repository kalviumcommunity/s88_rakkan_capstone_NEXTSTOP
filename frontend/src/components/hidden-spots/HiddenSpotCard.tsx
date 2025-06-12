import React, { useState } from 'react';
import { MapPin, ThumbsUp, ThumbsDown } from 'lucide-react';
import { HiddenSpot } from '../../types';

interface HiddenSpotCardProps {
  spot: HiddenSpot;
}

const HiddenSpotCard: React.FC<HiddenSpotCardProps> = ({ spot }) => {
  const [upvotes, setUpvotes] = useState(spot.upvotes);
  const [downvotes, setDownvotes] = useState(spot.downvotes);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  const handleUpvote = () => {
    if (userVote === 'up') {
      // Remove upvote
      setUpvotes(upvotes - 1);
      setUserVote(null);
    } else {
      // Add upvote and remove downvote if exists
      setUpvotes(upvotes + 1);
      if (userVote === 'down') {
        setDownvotes(downvotes - 1);
      }
      setUserVote('up');
    }
  };

  const handleDownvote = () => {
    if (userVote === 'down') {
      // Remove downvote
      setDownvotes(downvotes - 1);
      setUserVote(null);
    } else {
      // Add downvote and remove upvote if exists
      setDownvotes(downvotes + 1);
      if (userVote === 'up') {
        setUpvotes(upvotes - 1);
      }
      setUserVote('down');
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={spot.image} 
          alt={spot.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-3 left-3 text-white flex items-center gap-1">
            <MapPin size={16} className="text-white/80" />
            <span className="text-sm font-medium">{spot.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{spot.title}</h3>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {spot.description}
        </p>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <button 
              onClick={handleUpvote}
              className={`flex items-center gap-1 py-1 px-2 rounded-md transition-colors ${
                userVote === 'up' 
                  ? 'bg-green-100 text-green-700' 
                  : 'hover:bg-gray-100 text-gray-500'
              }`}
            >
              <ThumbsUp size={16} className={userVote === 'up' ? 'fill-green-700' : ''} />
              <span>{upvotes}</span>
            </button>
            <button 
              onClick={handleDownvote}
              className={`flex items-center gap-1 py-1 px-2 rounded-md transition-colors ${
                userVote === 'down' 
                  ? 'bg-red-100 text-red-700' 
                  : 'hover:bg-gray-100 text-gray-500'
              }`}
            >
              <ThumbsDown size={16} className={userVote === 'down' ? 'fill-red-700' : ''} />
              <span>{downvotes}</span>
            </button>
          </div>
          <div className="text-xs text-gray-500">
            Submitted by a traveler
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenSpotCard;