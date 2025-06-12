import React, { useState } from 'react';
import { tripTypes, budgetRanges, durations } from '../../data/mockData';
import { Compass, DollarSign, Clock } from 'lucide-react';

interface TripPreference {
  type: string;
  budget: string;
  duration: string;
}

const TripPlanner: React.FC = () => {
  const [preferences, setPreferences] = useState<TripPreference>({
    type: '',
    budget: '',
    duration: ''
  });
  
  const [showResults, setShowResults] = useState(false);
  
  const handlePreferenceChange = (field: keyof TripPreference, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (preferences.type && preferences.budget && preferences.duration) {
      setShowResults(true);
    }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">Plan Your Perfect Trip</h2>
            <p className="opacity-90">Tell us your preferences and we'll suggest destinations just for you</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Compass size={18} className="text-teal-600" />
                  Trip Type
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={preferences.type}
                  onChange={(e) => handlePreferenceChange('type', e.target.value)}
                  required
                >
                  <option value="">Select trip type</option>
                  {tripTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <DollarSign size={18} className="text-teal-600" />
                  Budget
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={preferences.budget}
                  onChange={(e) => handlePreferenceChange('budget', e.target.value)}
                  required
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Clock size={18} className="text-teal-600" />
                  Duration
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={preferences.duration}
                  onChange={(e) => handlePreferenceChange('duration', e.target.value)}
                  required
                >
                  <option value="">Select duration</option>
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-md"
            >
              Find My Perfect Trip
            </button>
          </form>
          
          {showResults && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Perfect For You: {preferences.type} Trip
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-teal-600 mb-2">Recommended Destination</h4>
                  <p className="text-gray-800 font-bold text-lg">
                    {preferences.type === 'Adventure' ? 'Swiss Alps, Switzerland' : 
                     preferences.type === 'Relaxation' ? 'Santorini, Greece' :
                     preferences.type === 'Cultural' ? 'Kyoto, Japan' :
                     preferences.type === 'Family' ? 'Barcelona, Spain' :
                     preferences.type === 'Luxury' ? 'Bali, Indonesia' : 'Peru, Machu Picchu'}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Perfect for {preferences.type.toLowerCase()} trips, fits your {preferences.budget.toLowerCase()} budget
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-teal-600 mb-2">Suggested Itinerary</h4>
                  <p className="text-gray-800">
                    Based on your {preferences.duration.toLowerCase()} preference, we recommend:
                  </p>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>• 3 days exploring local attractions</li>
                    <li>• 2 days for cultural experiences</li>
                    {preferences.type === 'Adventure' && <li>• Day trip to nearby hiking trails</li>}
                    {preferences.type === 'Relaxation' && <li>• Spa and wellness day</li>}
                    {preferences.type === 'Cultural' && <li>• Guided historical tour</li>}
                  </ul>
                </div>
              </div>
              
              <button className="mt-4 w-full py-2 bg-white border border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-colors">
                Explore Complete Package
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TripPlanner;