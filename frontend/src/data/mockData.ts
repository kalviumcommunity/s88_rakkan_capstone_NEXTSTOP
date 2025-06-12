import type { Destination, User, TourPackage, TravelAgency, HiddenSpot, FoodSpot } from '../types';

export const travelAgencies: TravelAgency[] = [
  {
    id: '1',
    name: 'Adventure Quest Tours',
    logo: 'https://images.unsplash.com/photo-1581280690647-7a686804d595?w=200&h=200&fit=crop',
    description: 'Specializing in adventure tours and unique travel experiences across India. From mountain treks to desert safaris, we curate unforgettable journeys.',
    rating: 4.8,
    customersCount: 1200,
    reviewCount: 450,
    packages: [
      {
        title: 'Kerala Backwaters Adventure',
        price: 25000,
        duration: '5 days'
      },
      {
        title: 'Himalayan Trek Expedition',
        price: 35000,
        duration: '7 days'
      },
      {
        title: 'Goa Water Sports Package',
        price: 18000,
        duration: '4 days'
      }
    ]
  },
  {
    id: '2',
    name: 'Heritage Voyages',
    logo: 'https://source.unsplash.com/100x100/?heritage',
    description: 'Discover India\'s rich cultural heritage with our expertly curated tours. Experience the grandeur of palaces, ancient temples, and living traditions.',
    rating: 4.6,
    customersCount: 950,
    reviewCount: 320,
    packages: [
      {
        title: 'Rajasthan Royal Heritage Tour',
        price: 45000,
        duration: '8 days'
      },
      {
        title: 'Golden Triangle Deluxe',
        price: 35000,
        duration: '6 days'
      },
      {
        title: 'Varanasi Spiritual Journey',
        price: 22000,
        duration: '4 days'
      }
    ]
  }
];

export const foodSpots: FoodSpot[] = [
  {
    id: '1',
    name: 'Royal Punjab House',
    cuisine: 'North Indian',
    description: 'Award-winning restaurant featuring authentic Punjabi flavors, tandoor specialties, and luxurious dining ambiance with live music.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
    location: 'Connaught Place, Delhi',
    state: 'Delhi',
    rating: 4.8,
    reviewCount: 520,
    priceLevel: 'expensive' as const,
    specialties: ['Butter Chicken', 'Dal Makhani', 'Tandoori Raan', 'Biryani'],
    timings: {
      open: '12:00',
      close: '23:00'
    },
    features: ['Live Music', 'Outdoor Seating', 'Full Bar', 'Valet Parking'],
    contactInfo: {
      phone: '+91-1234567890',
      website: 'https://example.com/royalpunjab'
    }
  },
  {
    id: '2',
    name: 'Coastal Flavors',
    cuisine: 'South Indian Coastal',
    description: 'Experience the authentic tastes of coastal South India with our fresh seafood and traditional spice blends.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
    location: 'Marine Drive, Mumbai',
    state: 'Maharashtra',
    rating: 4.7,
    reviewCount: 380,
    priceLevel: 'moderate' as const,
    specialties: ['Malabar Fish Curry', 'Prawn Masala', 'Appam', 'Toddy Shop Meen'],
    timings: {
      open: '11:30',
      close: '22:30'
    },
    features: ['Sea View', 'Fresh Catch', 'Family Friendly'],
    contactInfo: {
      phone: '+91-9876543210',
      website: 'https://example.com/coastalflavors'
    }
  },
  {
    id: '3',
    name: 'The Street Food Company',
    cuisine: 'Indian Street Food',
    description: 'Modern cafe serving iconic Indian street foods in a hygienic setting with innovative presentations.',
    image: 'https://images.unsplash.com/photo-1602273660127-a0000560a4c1?w=800&h=600&fit=crop',
    location: 'Indiranagar, Bangalore',
    state: 'Karnataka',
    rating: 4.6,
    reviewCount: 890,
    priceLevel: 'budget' as const,
    specialties: ['Pani Puri', 'Vada Pav', 'Bhel Puri', 'Mumbai Sandwich'],
    timings: {
      open: '10:00',
      close: '22:00'
    },
    features: ['Quick Service', 'Takeaway', 'Modern Ambiance'],
    contactInfo: {
      phone: '+91-8765432109',
      website: 'https://example.com/streetfoodco'
    }
  },
  {
    id: '4',
    name: 'Luxury Thali House',
    cuisine: 'Multi-Regional Indian',
    description: 'Experience the grandeur of Indian dining with our extensive thali selections featuring dishes from across the country.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&h=600&fit=crop',
    location: 'Bodakdev, Ahmedabad',
    state: 'Gujarat',
    rating: 4.9,
    reviewCount: 670,
    priceLevel: 'luxury' as const,
    specialties: ['Royal Thali', 'Gujarati Thali', 'Rajasthani Thali'],
    timings: {
      open: '11:00',
      close: '23:00'
    },
    features: ['Traditional Seating', 'Pure Vegetarian', 'Silver Utensils'],
    contactInfo: {
      phone: '+91-7654321098',
      website: 'https://example.com/luxurythali'
    }
  }
];

export const tripTypes = [
  'Adventure',
  'Cultural',
  'Beach',
  'Mountain',
  'Historical',
  'Religious',
  'Nature',
  'Other'
];

export const budgetRanges = [
  '₹5,000 - ₹10,000',
  '₹10,000 - ₹20,000',
  '₹20,000 - ₹50,000',
  'Above ₹50,000'
];

export const durations = [
  '1-3 days',
  '4-7 days',
  '8-14 days',
  '15+ days'
];

export const hiddenSpots: HiddenSpot[] = [
  {
    id: '1',
    title: 'Secret Waterfall Trail',
    location: 'Munnar, Kerala',
    image: 'https://images.unsplash.com/photo-1580988853861-f95d31ee4d15?w=800&h=600&fit=crop',
    description: 'A hidden waterfall trail away from tourist crowds, perfect for adventure seekers.',
    addedBy: 'John Doe',
    difficulty: 'Moderate',
    bestTime: 'October to March',
    upvotes: 45,
    downvotes: 3,
    addedOn: new Date('2023-01-15')
  },
  {
    id: '2',
    title: 'Ancient Cave Temple',
    location: 'Badami, Karnataka',
    image: 'https://images.unsplash.com/photo-1590136831894-078e7afac85e?w=800&h=600&fit=crop',
    description: 'An undiscovered ancient cave temple with remarkable rock-cut architecture.',
    addedBy: 'Jane Smith',
    difficulty: 'Easy',
    bestTime: 'November to February',
    upvotes: 38,
    downvotes: 2,
    addedOn: new Date('2023-02-20')
  }
];

export const mockUsers: User[] = [
  {
    _id: '1',
    name: 'Adventure Seeker',
    email: 'seeker@example.com',
    role: 'user',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  },
  {
    _id: '2',
    name: 'India Tours & Travels',
    email: 'agency@example.com',
    role: 'admin',
    profileImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=150&h=150&fit=crop'
  }
];

export const mockDestinations: Destination[] = [
  {
    _id: '1',
    name: 'Taj Mahal',
    state: 'Uttar Pradesh',
    description: 'An immense mausoleum of white marble, built between 1632 and 1653 by order of the Mughal emperor Shah Jahan in memory of his favorite wife.',
    images: ['https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=800&fit=crop'],
    location: {
      type: 'Point',
      coordinates: [27.1751, 78.0421]
    },
    category: 'Historical',
    highlights: ['UNESCO World Heritage Site', 'Marble Architecture', 'Mughal Gardens'],
    bestTimeToVisit: {
      from: 'October',
      to: 'March'
    },
    nearbyAttractions: [
      {
        name: 'Agra Fort',
        distance: 2.5,
        type: 'Attraction'
      },
      {
        name: 'Mehtab Bagh',
        distance: 1.2,
        type: 'Attraction'
      }
    ],
    isHiddenGem: false,
    addedBy: mockUsers[1],
    ratings: [],
    averageRating: 4.8
  },
  {
    _id: '2',
    name: 'Rann of Kutch',
    state: 'Gujarat',
    description: 'A salt marsh in the Thar Desert, famous for its white salt desert and cultural festivities during Rann Utsav.',
    images: ['https://images.unsplash.com/photo-1589308454676-22a0d2a29b89?w=1200&h=800&fit=crop'],
    location: {
      type: 'Point',
      coordinates: [23.8357, 69.8370]
    },
    category: 'Nature',
    highlights: ['White Desert', 'Rann Utsav', 'Kutchi Culture'],
    bestTimeToVisit: {
      from: 'November',
      to: 'February'
    },
    nearbyAttractions: [
      {
        name: 'Kalo Dungar',
        distance: 15,
        type: 'Attraction'
      }
    ],
    isHiddenGem: true,
    addedBy: mockUsers[0],
    ratings: [],
    averageRating: 4.5
  },
  {
    _id: '3',
    name: 'Valley of Flowers',
    state: 'Uttarakhand',
    description: 'A vibrant national park known for its meadows of endemic alpine flowers and variety of flora, located in the West Himalaya.',
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop'],
    location: {
      type: 'Point',
      coordinates: [30.7283, 79.6058]
    },
    category: 'Nature',
    highlights: ['Alpine Flowers', 'Trekking Trails', 'Himalayan Views'],
    bestTimeToVisit: {
      from: 'July',
      to: 'September'
    },
    nearbyAttractions: [
      {
        name: 'Hemkund Sahib',
        distance: 5,
        type: 'Attraction'
      }
    ],
    isHiddenGem: true,
    addedBy: mockUsers[0],
    ratings: [],
    averageRating: 4.7
  },
  {
    _id: '4',
    name: 'Hampi',
    state: 'Karnataka',
    description: 'Ancient archaeological site featuring stunning temple ruins, intricate stone carvings, and boulder-strewn landscapes from the Vijayanagara Empire.',
    images: ['https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&h=800&fit=crop'],
    location: {
      type: 'Point',
      coordinates: [15.3350, 76.4600]
    },
    category: 'Historical',
    highlights: ['Ancient Ruins', 'Rock Climbing', 'Temple Architecture'],
    bestTimeToVisit: {
      from: 'October',
      to: 'February'
    },
    nearbyAttractions: [
      {
        name: 'Virupaksha Temple',
        distance: 0.5,
        type: 'Attraction'
      },
      {
        name: 'Tungabhadra River',
        distance: 1,
        type: 'Attraction'
      }
    ],
    isHiddenGem: false,
    addedBy: mockUsers[1],
    ratings: [],
    averageRating: 4.6
  },
  {
    _id: '5',
    name: 'Tawang Monastery',
    state: 'Arunachal Pradesh',
    description: 'The largest monastery in India and second largest in the world, offering stunning views of the Himalayas and rich Buddhist culture.',
    images: ['https://images.unsplash.com/photo-1623468869173-da5168dd311c?w=1200&h=800&fit=crop'],
    location: {
      type: 'Point',
      coordinates: [27.5859, 91.8593]
    },
    category: 'Religious',
    highlights: ['Buddhist Culture', 'Mountain Views', 'Ancient Manuscripts'],
    bestTimeToVisit: {
      from: 'March',
      to: 'October'
    },
    nearbyAttractions: [
      {
        name: 'Sela Pass',
        distance: 30,
        type: 'Attraction'
      },
      {
        name: 'Tawang War Memorial',
        distance: 2,
        type: 'Attraction'
      }
    ],
    isHiddenGem: true,
    addedBy: mockUsers[1],
    ratings: [],
    averageRating: 4.9
  }
];

export const mockTourPackages: TourPackage[] = [
  {
    _id: '1',
    name: 'Golden Triangle Tour',
    agency: mockUsers[1],
    description: 'Explore the rich history and culture of India\'s Golden Triangle: Delhi, Agra, and Jaipur.',
    destinations: [
      {
        destination: mockDestinations[0],
        duration: 2
      }
    ],
    duration: 6,
    price: {
      amount: 45000,
      currency: 'INR'
    },
    inclusions: ['Hotel Stay', 'Breakfast', 'AC Transport', 'Guide'],
    exclusions: ['Flights', 'Personal Expenses', 'Tips'],
    itinerary: [
      {
        day: 1,
        activities: [
          {
            time: '09:00',
            description: 'Delhi City Tour',
            location: 'Delhi'
          }
        ]
      }
    ],
    maxGroupSize: 12,
    startDates: [new Date('2025-10-15'), new Date('2025-11-15')],
    reviews: [],
    averageRating: 4.7,
    images: ['https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop'],
    isVerified: true,
    status: 'active'
  },
  {
    _id: '2',
    name: 'Hidden Gems of Gujarat',
    agency: mockUsers[1],
    description: 'Discover the untouched beauty of Gujarat, from the white desert to ancient stepwells.',
    destinations: [
      {
        destination: mockDestinations[1],
        duration: 3
      }
    ],
    duration: 5,
    price: {
      amount: 35000,
      currency: 'INR'
    },
    inclusions: ['Accommodation', 'Meals', 'Transport', 'Local Guide'],
    exclusions: ['Flights', 'Personal Expenses'],
    itinerary: [
      {
        day: 1,
        activities: [
          {
            time: '10:00',
            description: 'Arrive at Bhuj',
            location: 'Bhuj Airport'
          }
        ]
      }
    ],
    maxGroupSize: 8,
    startDates: [new Date('2025-12-01'), new Date('2025-12-15')],
    reviews: [],
    averageRating: 4.6,
    images: ['https://images.unsplash.com/photo-1590050802761-2f13dee17c3e?w=800&h=600&fit=crop'],
    isVerified: true,
    status: 'active'
  }
];