
import React, { useEffect } from "react";

const About = () => {
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
            src="https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Brazilian beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center z-10 px-4">
          <div className="max-w-3xl mx-auto text-white animate-fade-in">
            <span className="text-sm font-medium uppercase tracking-wider mb-2 block text-sand">Our Story</span>
            <h1 className="font-serif text-4xl sm:text-5xl mb-4">About Praia Luxo</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              A journey into premium beachwear inspired by Brazil's coastal elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-padding max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-lg mx-auto mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl text-navy">Our Journey</h2>
          <p>
            Founded in 2015 in Rio de Janeiro, Praia Luxo was born from a passion for combining 
            Brazil's vibrant coastal culture with sustainable luxury fashion. Our founders, 
            inspired by the natural beauty of Brazil's beaches and the country's rich design heritage, 
            set out to create beachwear that embodied both sophistication and environmental consciousness.
          </p>
          <p>
            What began as a small collection of premium swim shorts has evolved into a comprehensive 
            range of beachwear and accessories that celebrate the Brazilian spirit while adhering to 
            the highest standards of quality and sustainability.
          </p>

          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="image-wrapper rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Beachwear design process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="image-wrapper rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Sustainable fabrics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="font-serif text-3xl text-navy">Our Philosophy</h2>
          <p>
            At Praia Luxo, we believe that luxury is not only about exclusivity and quality, but 
            also about responsibility. Our design philosophy centers on creating timeless pieces 
            that transcend seasonal trends, reducing the environmental impact of fast fashion.
          </p>
          <p>
            Each garment is meticulously crafted using eco-friendly materials and traditional 
            techniques, honoring both our commitment to the environment and Brazil's rich textile 
            heritage. We work closely with local artisans, ensuring that traditional skills are 
            preserved and celebrated in our collections.
          </p>

          <h2 className="font-serif text-3xl text-navy">Craftsmanship & Quality</h2>
          <p>
            Our dedication to quality is evident in every stitch. Each piece undergoes rigorous 
            quality control to ensure durability, comfort, and a perfect fit. We source the finest 
            organic and recycled materials, including GOTS-certified organic cotton, recycled 
            polyester derived from ocean plastic, and innovative plant-based fabrics.
          </p>
          <p>
            The attention to detail extends to our prints and patterns, many of which are created 
            in collaboration with Brazilian artists and are inspired by the country's diverse 
            landscapes, from the Amazon rainforest to the colorful streets of Salvador.
          </p>

          <h2 className="font-serif text-3xl text-navy">Looking Forward</h2>
          <p>
            As we continue to grow, our commitment to sustainable luxury remains unwavering. 
            We are constantly exploring new eco-friendly materials and production methods, 
            seeking to reduce our environmental footprint while maintaining the exceptional 
            quality that defines Praia Luxo.
          </p>
          <p>
            We invite you to join us on this journey, embracing a vision of beachwear that 
            celebrates both the beauty of Brazil's coastal culture and the importance of 
            protecting our planet's precious resources.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-sand/30 py-16 mt-8">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-sm font-medium text-navy/70 uppercase tracking-wider mb-2 block">The People Behind Our Brand</span>
            <h2 className="font-serif text-3xl text-navy mb-4">Our Team</h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Meet the passionate individuals who bring Praia Luxo to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="premium-card text-center animate-fade-in">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-navy">Isabela Santos</h3>
              <p className="text-navy/70 text-sm">Founder & Creative Director</p>
            </div>
            
            <div className="premium-card text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-navy">Rafael Costa</h3>
              <p className="text-navy/70 text-sm">Co-Founder & Head of Sustainability</p>
            </div>
            
            <div className="premium-card text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573497019236-61f323342eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-navy">Luiza Oliveira</h3>
              <p className="text-navy/70 text-sm">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
