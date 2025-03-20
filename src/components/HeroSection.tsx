
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image - Premium Beach Scene */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')",
            transition: 'opacity 1.5s ease-in-out',
            opacity: isLoaded ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy/50 backdrop-blur-[1px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-1000 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              Luxury Brazilian Beachwear
            </span>
          </div>
          
          <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight tracking-tight hero-animate transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Where Elegance<br /> Meets the <span className="font-medium italic">Ocean</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light hero-animate transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Experience the perfect blend of Brazilian craftsmanship and sustainable luxury in every piece.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 hero-animate transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to="/collection">
              <Button variant="default" size="lg" className="bg-sand hover:bg-sand/90 text-navy font-medium group">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/30 to-white/60 animate-subtle-wave"></div>
      </div>
    </section>
  );
};

export default HeroSection;
