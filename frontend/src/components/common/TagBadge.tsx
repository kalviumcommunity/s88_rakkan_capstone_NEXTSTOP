import React from 'react';

interface TagBadgeProps {
  tag: string;
  className?: string;
}

const TagBadge: React.FC<TagBadgeProps> = ({ tag, className = '' }) => {
  // Different colors based on tag type
  const getTagColor = () => {
    switch (tag.toLowerCase()) {
      case 'adventure':
        return 'bg-orange-100 text-orange-800';
      case 'romantic':
        return 'bg-pink-100 text-pink-800';
      case 'scenic':
        return 'bg-green-100 text-green-800';
      case 'luxury':
        return 'bg-purple-100 text-purple-800';
      case 'culture':
        return 'bg-indigo-100 text-indigo-800';
      case 'food':
        return 'bg-yellow-100 text-yellow-800';
      case 'winter':
        return 'bg-blue-100 text-blue-800';
      case 'exotic':
        return 'bg-teal-100 text-teal-800';
      case 'historical':
        return 'bg-amber-100 text-amber-800';
      case 'architecture':
        return 'bg-slate-100 text-slate-800';
      case 'heritage':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getTagColor()} ${className}`}>
      {tag}
    </span>
  );
};

export default TagBadge;