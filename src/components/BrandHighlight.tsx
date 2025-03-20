
import React from 'react';

interface HighlightProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BrandHighlight: React.FC = () => {
  const highlights: HighlightProps[] = [
    {
      title: "Premium Quality",
      description: "Expertly crafted with the finest sustainable materials for comfort and durability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        </svg>
      )
    },
    {
      title: "Sustainable Production",
      description: "Eco-friendly processes and materials that respect our oceans and environment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c4.97 0 9-4.03 9-9-.09-4.01-3.38-7.93-8.99-11C16.39 5.07 13.1 1.5 12 2c-3 1-8.98 5.07-8.98 11 0 4.97 4.03 9 8.98 9Z"/>
          <path d="M7 15c3 2 6 2 9 0"/>
        </svg>
      )
    },
    {
      title: "Brazilian Heritage",
      description: "Designs inspired by the vibrant colors and spirit of Brazil's coastal culture.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      )
    },
    {
      title: "Exclusive Design",
      description: "Limited edition pieces designed for those who appreciate refined luxury.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="premium-card flex flex-col items-center text-center p-8 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center mb-6 text-navy">
                {highlight.icon}
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">{highlight.title}</h3>
              <p className="text-navy/70 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandHighlight;
