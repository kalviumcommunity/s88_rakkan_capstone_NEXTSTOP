export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  profileImage: string;
}

export interface Destination {
  _id: string;
  name: string;
  state: string;
  description: string;
  images: string[];
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  category: 'Historical' | 'Nature' | 'Adventure' | 'Cultural' | 'Religious' | 'Beach' | 'Mountain' | 'Other';
  highlights: string[];
  bestTimeToVisit: {
    from: string;
    to: string;
  };
  nearbyAttractions: {
    name: string;
    distance: number;
    type: 'Food' | 'Accommodation' | 'Attraction' | 'Other';
  }[];
  isHiddenGem: boolean;
  addedBy: User;
  ratings: Rating[];
  averageRating: number;
}

export interface TourPackage {
  _id: string;
  name: string;
  agency: User;
  description: string;
  destinations: {
    destination: Destination;
    duration: number;
  }[];
  duration: number;
  price: {
    amount: number;
    currency: 'INR' | 'USD' | 'EUR';
  };
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    activities: {
      time: string;
      description: string;
      location: string;
    }[];
  }[];
  maxGroupSize: number;
  startDates: Date[];
  reviews: Rating[];
  averageRating: number;
  images: string[];
  isVerified: boolean;
  status: 'active' | 'inactive' | 'soldout';
}

export interface Rating {
  user: User;
  rating: number;
  review?: string;
  date: Date;
}

export interface SearchFilters {
  category?: string;
  state?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  isHiddenGem?: boolean;
}

export interface TripPreference {
  category: 'Historical' | 'Nature' | 'Adventure' | 'Cultural' | 'Religious' | 'Beach' | 'Mountain' | 'Other';
  budget: {
    min: number;
    max: number;
    currency: 'INR' | 'USD' | 'EUR';
  };
  duration: number;
  state?: string;
  groupSize: number;
}

export interface Rental {
  id: string;
  name: string;
  type: 'SUV' | 'Motorcycle' | 'MPV' | 'Car';
  description: string;
  image: string;
  pricePerDay: number;
  location: string;
  state: string;
  rating: number;
  capacity: number;
  isAvailable: boolean;
  features: string[];
  provider: User;
}

export interface HiddenSpot {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  addedBy: string;
  difficulty: string;
  bestTime: string;
  upvotes: number;
  downvotes: number;
  addedOn: Date;
}

export interface TravelAgency {
  id: string;
  name: string;
  logo: string;
  description: string;
  rating: number;
  customersCount: number;
  reviewCount: number;
  packages: Array<{
    title: string;
    price: number;
    duration: string;
  }>;
}

export interface Vehicle {
  id: string;
  type: 'SUV' | 'Motorcycle' | 'MPV' | 'Car';
  name: string;
  modelYear: number;
  transmissionType: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  dailyRate: number;
  mileageLimit?: number;
  insuranceCoverage: boolean;
  additionalFeatures: string[];
}

export interface FoodSpot {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  location: string;
  state: string;
  rating: number;
  reviewCount: number;
  priceLevel: 'budget' | 'moderate' | 'expensive' | 'luxury';
  specialties: string[];
  timings: {
    open: string;
    close: string;
  };
  features: string[];
  contactInfo: {
    phone?: string;
    website?: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}