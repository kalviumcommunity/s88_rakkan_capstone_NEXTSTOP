import React from 'react';
import { TravelAgency } from '../../types';
import StarRating from '../common/StarRating';
import { Users, ChevronRight, Calendar, IndianRupee } from 'lucide-react';

interface AgencyCardProps {
  agency: TravelAgency;
}

const AgencyCard: React.FC<AgencyCardProps> = ({ agency }) => {
  const [selectedPackage, setSelectedPackage] = React.useState(agency.packages[0]);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full border border-gray-100 animate-fade-in">
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-primary-50 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary-100 ring-offset-2">
            <img 
              src={agency.logo} 
              alt={agency.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{agency.name}</h3>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <StarRating rating={agency.rating} size={14} />
                <span className="text-primary-700 font-medium">{agency.rating}</span>
              </div>
              <span className="text-gray-500 flex items-center gap-1">
                <Users size={14} />
                {agency.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {agency.description}
        </p>
        
        <div className="space-y-3">
          <div className="text-xs text-primary-600 font-medium tracking-wide uppercase">Featured Packages</div>
          <div className="space-y-2">
            {agency.packages.map(pkg => (
              <button
                key={pkg.title}
                onClick={() => setSelectedPackage(pkg)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  selectedPackage === pkg 
                    ? 'bg-primary-50 border-primary-100 shadow-inner-lg' 
                    : 'bg-gray-50 hover:bg-gray-100 border-transparent'
                } border`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{pkg.title}</h4>
                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <IndianRupee size={12} />
                        {pkg.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                  <ChevronRight 
                    size={16} 
                    className={`transition-transform ${
                      selectedPackage === pkg ? 'text-primary-600' : 'text-gray-400'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group">
          View All Packages
          <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default AgencyCard;