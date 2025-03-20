import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <span className="text-sm font-medium text-navy/70 uppercase tracking-wider mb-2 block">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">Crafting Coastal Elegance Since 2015</h2>
            <div className="prose prose-slate text-navy/80 mb-8 max-w-lg">
              <p>
                Born on the sun-drenched shores of Brazil, Praia Luxo embodies the vibrant spirit and 
                sophisticated simplicity of our coastal heritage. Our journey began with a passion to 
                create premium beachwear that embraces both luxury and sustainability.
              </p>
              <p>
                Each piece in our collection is meticulously crafted using eco-friendly materials and traditional 
                techniques, honoring both our commitment to the environment and Brazil's rich textile tradition.
              </p>
            </div>
            <Link to="/about">
              <Button variant="outline">Discover Our Story</Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 bg-slate-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Beachwear design process" 
                  className="object-cover w-full h-full animate-scale-in"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Sustainable fabrics" 
                  className="object-cover w-full h-full animate-scale-in"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
