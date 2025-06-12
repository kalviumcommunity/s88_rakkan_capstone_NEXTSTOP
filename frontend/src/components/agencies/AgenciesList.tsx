import * as React from 'react';
import { travelAgencies } from '../../data/mockData';
import AgencyCard from './AgencyCard';
import { Building2 } from 'lucide-react';

const AgenciesList: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Partner Travel Agencies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse packages from trusted travel agencies specializing in various destinations 
            and trip types. Contact them directly for customized experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelAgencies.map((agency) => (
            <AgencyCard key={agency.id} agency={agency} />
          ))}
          
          {/* Agency Registration Card */}
          <div className="bg-white bg-opacity-80 rounded-xl overflow-hidden shadow-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 h-full">
            <Building2 size={36} className="text-teal-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-1">Are you a travel agency?</h3>
            <p className="text-gray-600 text-center mb-4">
              Partner with us to showcase your packages to thousands of travelers
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors">
              Register Your Agency
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenciesList;