import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide inline-block mb-4">
              <span className="font-bold">Praia</span>
              <span className="font-light italic">Luxo</span>
            </Link>
            <p className="text-white/80 text-sm mb-6 max-w-xs">
              Premium Brazilian beachwear crafted for those who appreciate luxury, comfort, and sustainable elegance.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:contact@praialuxo.com" className="text-white/90 hover:text-white transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="col-span-1">
            <h4 className="font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/collection" className="text-white/80 hover:text-white text-sm transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-white/80 hover:text-white text-sm transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-white/80 hover:text-white text-sm transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-white/80 hover:text-white text-sm transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-white/80 hover:text-white text-sm transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-white/80 hover:text-white text-sm transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-medium text-lg mb-4">Join Our Community</h4>
            <p className="text-white/80 text-sm mb-4">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-navy-800 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/30 text-sm"
              />
              <Button variant="premium" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-xs mb-4 md:mb-0">
            © {currentYear} PraiaLuxo. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/70">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/shipping" className="hover:text-white transition-colors">
              Shipping Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
