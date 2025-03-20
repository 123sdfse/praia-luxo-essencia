
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const SustainabilitySection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto text-white">
          <span className="text-sm font-medium uppercase tracking-wider mb-2 block text-sand">Our Commitment</span>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Sustainable Luxury</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            We believe that premium quality and environmental responsibility go hand in hand. Our commitment to sustainability guides every aspect of our design and production process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-lg text-left animate-fade-in">
              <h3 className="font-serif text-xl mb-3">Eco-Friendly Materials</h3>
              <p className="text-white/80 text-sm">
                We use organic cotton, recycled polyester, and innovative plant-based fabrics to minimize our environmental footprint.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-serif text-xl mb-3">Ethical Production</h3>
              <p className="text-white/80 text-sm">
                All our pieces are crafted by skilled artisans in Brazil under fair working conditions and appropriate compensation.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-serif text-xl mb-3">Ocean Conservation</h3>
              <p className="text-white/80 text-sm">
                For every purchase, we contribute to ocean conservation efforts and beach cleanup initiatives across Brazil.
              </p>
            </div>
          </div>

          <Link to="/sustainability">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More About Our Practices
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
