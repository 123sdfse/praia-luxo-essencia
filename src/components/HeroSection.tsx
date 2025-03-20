
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            transition: 'opacity 1.5s ease-in-out',
            opacity: isLoaded ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-1000 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white/10 backdrop-blur-sm rounded-full mb-6 hero-animate">
              Premium Brazilian Beachwear
            </span>
          </div>
          
          <h1 className={`font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight hero-animate transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Elegance Meets <br /><span className="font-medium">Coastal Luxury</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto hero-animate transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Discover our collection of premium beachwear crafted with sustainable materials and inspired by the vibrant spirit of Brazil.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 hero-animate transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to="/collection">
              <Button variant="premium" size="lg" className="group">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-subtle-wave">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/80 mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;
