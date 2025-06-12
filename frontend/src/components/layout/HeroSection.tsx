import React from 'react';
import { Map, MapPin, Calendar, Users, Compass } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in leading-tight">
            Discover the Magic of 
            <span className="text-primary-400 block mt-2">Incredible India</span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 animate-slide-up delay-100">
            Embark on unforgettable journeys through ancient traditions, vibrant cultures, 
            and breathtaking landscapes.
          </p>

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mt-12 animate-slide-up delay-200">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10
                    border border-white/20 text-white placeholder:text-white/70
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" size={20} />
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="When?"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10
                    border border-white/20 text-white placeholder:text-white/70
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" size={20} />
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Number of travelers"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10
                    border border-white/20 text-white placeholder:text-white/70
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" size={20} />
              </div>
            </div>
            
            <button className="w-full md:w-auto mt-4 btn btn-primary px-8 py-3 text-lg font-medium">
              Plan Your Journey
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-slide-up delay-300">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
              <Map className="w-12 h-12 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Curated Destinations</h3>
              <p className="text-white/80">Handpicked locations across India for unforgettable experiences</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
              <Compass className="w-12 h-12 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-white/80">Local experts to help you discover hidden gems</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
              <Users className="w-12 h-12 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Personalized Tours</h3>
              <p className="text-white/80">Customized experiences for solo travelers and groups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;