import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Ipanema Linen Shirt',
    category: "Men's Shirt",
    price: 'R$480',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80'
  },
  {
    id: '2',
    name: 'Copacabana Swim Shorts',
    category: "Men's Shorts",
    price: 'R$350',
    image: 'https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    id: '3',
    name: 'Búzios Beach Dress',
    category: "Women's Dress",
    price: 'R$520',
    image: 'https://images.unsplash.com/photo-1596785233777-a682edc98e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    id: '4',
    name: 'Trancoso Beach Accessories',
    category: 'Accessories',
    price: 'R$280',
    image: 'https://images.unsplash.com/photo-1485781665645-7b88a2bbc272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80'
  },
  {
    id: '5',
    name: 'Fernando de Noronha Swim Trunks',
    category: "Men's Swimwear",
    price: 'R$390',
    image: 'https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '6',
    name: 'Paraty Linen Pants',
    category: "Men's Pants",
    price: 'R$450',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '7',
    name: 'Jericoacoara Beach Cover',
    category: "Women's Beachwear",
    price: 'R$340',
    image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2586&q=80'
  },
  {
    id: '8',
    name: 'Ilha Grande Sunhat',
    category: 'Accessories',
    price: 'R$280',
    image: 'https://images.unsplash.com/photo-1605232350070-6ae479369945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80'
  }
];

// Categories
const categories = ["All", "Men's", "Women's", "Accessories"];

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products based on active category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category.includes(activeCategory))
      );
    }
  }, [activeCategory]);

  return (
    <div className="pt-24 sm:pt-32 pb-16">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-sm font-medium text-navy/70 uppercase tracking-wider mb-2 block">Our Products</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-4">Collection</h1>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            Discover our premium beachwear, designed for comfort, style, and sustainability.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-navy text-white"
                  : "bg-sand/50 text-navy hover:bg-sand"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="premium-card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-wrapper aspect-[3/4] mb-4 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-2">
                <span className="text-xs text-navy/60 uppercase tracking-wider">{product.category}</span>
                <h3 className="font-medium text-navy mt-1 mb-1">{product.name}</h3>
                <p className="font-serif text-navy">{product.price}</p>
                <div className="mt-4 mb-2">
                  <Button variant="outline" size="sm" className="w-full group">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
