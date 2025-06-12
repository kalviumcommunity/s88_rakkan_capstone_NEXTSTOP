import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Filter, Car, Truck, Bike } from 'lucide-react';
import RentalCard from './RentalCard';
import SearchBar from '../common/SearchBar';
import LoadingSpinner from '../common/LoadingSpinner';

// Mock rentals data since we don't have a backend endpoint yet
const mockRentals = [
  {
    id: '1',
    name: 'Royal Enfield Classic 350',
    type: 'Motorcycle',
    description: 'Perfect for mountain roads and city exploration. Well-maintained Royal Enfield Classic 350 available for daily or weekly rental.',
    image: 'https://source.unsplash.com/800x600/?royal-enfield',
    pricePerDay: 1200,
    location: 'Manali',
    state: 'Himachal Pradesh',
    rating: 4.8,
    capacity: 2
  },
  {
    id: '2',
    name: 'Mahindra Thar 4x4',
    type: 'SUV',
    description: 'Adventure-ready 4x4 SUV perfect for off-road exploration and mountain terrain. Comes with all safety features.',
    image: 'https://source.unsplash.com/800x600/?suv-4x4',
    pricePerDay: 3500,
    location: 'Leh',
    state: 'Ladakh',
    rating: 4.9,
    capacity: 4
  },
  {
    id: '3',
    name: 'Toyota Innova Crysta',
    type: 'MPV',
    description: 'Spacious and comfortable MPV ideal for family trips and group tours. Well-maintained with experienced driver.',
    image: 'https://source.unsplash.com/800x600/?toyota-innova',
    pricePerDay: 4000,
    location: 'Delhi',
    state: 'Delhi',
    rating: 4.7,
    capacity: 7
  }
];

const vehicleTypes = [
  { name: 'All', icon: Car },
  { name: 'SUV', icon: Truck },
  { name: 'Motorcycle', icon: Bike },
  { name: 'MPV', icon: Car }
];

const RentalsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  
  // TODO: Replace with actual API call
  const { data: rentals = mockRentals, isLoading } = useQuery({
    queryKey: ['rentals'],
    queryFn: () => Promise.resolve(mockRentals)
  });

  const filteredRentals = rentals.filter(rental => {
    const matchesSearch = !searchQuery || 
      rental.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || rental.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vehicle Rentals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore India with our curated selection of rental vehicles. 
            From city cars to off-road adventures, find the perfect ride for your journey.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar
              placeholder="Search rentals by name or location..."
              onChange={setSearchQuery}
            />
          </div>
          <div className="flex gap-4">
            <button
              className="btn btn-outline flex items-center gap-2"
            >
              <Filter size={18} />
              Price Range
            </button>
          </div>
        </div>

        {/* Vehicle Type Filter */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {vehicleTypes.map(type => {
            const Icon = type.icon;
            return (
              <button
                key={type.name}
                onClick={() => setSelectedType(type.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  whitespace-nowrap transition-colors
                  ${selectedType === type.name 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                <Icon size={18} />
                {type.name}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredRentals.length === 0 ? (
          <div className="text-center text-gray-600 py-12">
            No rentals found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRentals.map((rental) => (
              <RentalCard key={rental.id} rental={rental} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RentalsList;