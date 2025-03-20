
import React, { useEffect } from "react";

const Sustainability = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 sm:pt-32 pb-16">
      {/* Hero Section */}
      <div className="relative h-80 sm:h-96 md:h-[500px] mb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Sustainable ocean view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center z-10 px-4">
          <div className="max-w-3xl mx-auto text-white animate-fade-in">
            <span className="text-sm font-medium uppercase tracking-wider mb-2 block text-sand">Our Commitment</span>
            <h1 className="font-serif text-4xl sm:text-5xl mb-4">Sustainability</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Crafting luxury beachwear with respect for our planet.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-padding max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-lg mx-auto mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl text-navy">Our Commitment to the Environment</h2>
          <p>
            At Praia Luxo, sustainability isn't just a trend—it's at the core of everything we do. 
            We believe that luxury and environmental responsibility can coexist, and we strive to 
            prove this with every piece we create.
          </p>
          <p>
            From sourcing materials to production processes and packaging, every step of our 
            operation is guided by our commitment to minimizing environmental impact while 
            maximizing the quality and longevity of our products.
          </p>

          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="image-wrapper rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Sustainable materials"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="image-wrapper rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581859814481-bfd944e3122f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Ocean conservation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="font-serif text-3xl text-navy">Sustainable Materials</h2>
          <p>
            We carefully select materials that meet our standards for both quality and 
            sustainability:
          </p>
          <ul>
            <li>
              <strong>Organic Cotton:</strong> Our cotton is GOTS-certified, ensuring it's grown without harmful 
              chemicals and under fair labor conditions.
            </li>
            <li>
              <strong>Recycled Polyester:</strong> We use polyester derived from post-consumer plastic bottles, 
              including plastic recovered from the ocean.
            </li>
            <li>
              <strong>Linen:</strong> Our linen comes from flax grown without irrigation in regions where 
              rainfall is sufficient, reducing water usage.
            </li>
            <li>
              <strong>Innovative Plant-Based Fabrics:</strong> We incorporate materials like Tencel™ Lyocell, 
              made from sustainably harvested wood pulp in a closed-loop process that reuses water 
              and solvents.
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-navy">Ethical Production</h2>
          <p>
            We maintain close relationships with our manufacturing partners to ensure ethical 
            working conditions and fair compensation. All our production facilities in Brazil 
            comply with strict environmental regulations and fair labor practices.
          </p>
          <p>
            By producing locally, we not only support the Brazilian economy but also reduce 
            the carbon footprint associated with shipping materials and finished products 
            around the world.
          </p>

          <h2 className="font-serif text-3xl text-navy">Ocean Conservation Initiatives</h2>
          <p>
            As a beachwear brand, we have a special connection to the ocean. For every 
            purchase, we contribute to ocean conservation efforts:
          </p>
          <ul>
            <li>We partner with local NGOs for beach cleanup initiatives across Brazil.</li>
            <li>5% of our profits go to marine conservation projects.</li>
            <li>We organize annual volunteer events for our team and customers to participate in coastal habitat restoration.</li>
          </ul>

          <h2 className="font-serif text-3xl text-navy">Packaging & Shipping</h2>
          <p>
            We've eliminated traditional plastic packaging in favor of compostable alternatives:
          </p>
          <ul>
            <li>Our product bags are made from cassava starch and are fully compostable.</li>
            <li>Shipping boxes use recycled cardboard and are designed for minimal material use.</li>
            <li>Shipping documents are printed on recycled paper using soy-based inks.</li>
            <li>We offset carbon emissions from shipping through verified carbon offset programs.</li>
          </ul>

          <h2 className="font-serif text-3xl text-navy">Our Ongoing Journey</h2>
          <p>
            We recognize that sustainability is a journey, not a destination. We constantly 
            evaluate our practices and look for ways to improve. Our sustainability team 
            regularly audits our supply chain and production processes, setting ambitious 
            goals for reducing our environmental footprint year after year.
          </p>
          <p>
            By choosing Praia Luxo, you're not just investing in premium beachwear—you're 
            supporting a vision of fashion that respects and protects the natural beauty 
            that inspires us.
          </p>
        </div>
      </div>

      {/* Certification Section */}
      <div className="bg-sand/30 py-16 mt-8">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-sm font-medium text-navy/70 uppercase tracking-wider mb-2 block">Our Standards</span>
            <h2 className="font-serif text-3xl text-navy mb-4">Certifications & Partnerships</h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              We adhere to the highest environmental and ethical standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="premium-card flex items-center justify-center p-6 h-32 animate-fade-in" style={{ animationDelay: `${item * 0.1}s` }}>
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
                    <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0 0-3 2.1 2.1 0 0 0-3 0L13 8l-8.2-1.8a.8.8 0 0 0-.8.8.8.8 0 0 0 .17.27L12 15l-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
