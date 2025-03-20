
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

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
  }
];

const FeaturedCollection: React.FC = () => {
  return (
    <section className="section-padding bg-sand/30">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-navy/70 uppercase tracking-wider mb-2 block">Featured Collection</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">Summer Exclusive</h2>
            <p className="text-navy/70 text-lg">
              Discover our handcrafted pieces designed for coastal elegance and casual sophistication.
            </p>
          </div>
          <Link to="/collection" className="mt-6 lg:mt-0">
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className={cn(
                "transition-all duration-700 opacity-0 translate-y-8",
                {"animate-fade-in": true},
                {"animation-delay-100": index === 0},
                {"animation-delay-200": index === 1},
                {"animation-delay-300": index === 2},
                {"animation-delay-400": index === 3}
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  return (
    <div className={cn("group premium-card overflow-hidden", className)}>
      <Link to={`/collection/${product.id}`}>
        <div className="image-wrapper aspect-[3/4] mb-4 overflow-hidden bg-slate-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="px-2">
          <span className="text-xs text-navy/60 uppercase tracking-wider">{product.category}</span>
          <h3 className="font-medium text-navy mt-1 mb-1">{product.name}</h3>
          <p className="font-serif text-navy">{product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCollection;
