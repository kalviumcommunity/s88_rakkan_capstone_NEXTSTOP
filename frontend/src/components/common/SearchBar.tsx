import { ChangeEvent } from 'react';
import { Search } from 'lucide-react';

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

const SearchBar = ({ 
  placeholder = 'Search destinations...', 
  value = '', 
  onChange,
  className = '' 
}: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
          focus:ring-2 focus:ring-primary-500 focus:border-transparent
          placeholder:text-gray-500"
      />
      <Search 
        size={18} 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
      />
    </div>
  );
};

export default SearchBar;