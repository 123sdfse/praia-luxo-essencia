
import React from 'react';
import Button from './ui/Button';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-sand/20 p-8 rounded-lg shadow-sm animate-fade-in">
            <h2 className="font-serif text-3xl text-navy mb-6">Get in Touch</h2>
            <p className="text-navy/70 mb-8">
              Have questions about our products or sustainability efforts? We'd love to hear from you.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-navy/70 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border border-navy/10 rounded-md focus:outline-none focus:ring-1 focus:ring-navy/30"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-navy/70 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border border-navy/10 rounded-md focus:outline-none focus:ring-1 focus:ring-navy/30"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-navy/10 rounded-md focus:outline-none focus:ring-1 focus:ring-navy/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-navy/10 rounded-md focus:outline-none focus:ring-1 focus:ring-navy/30"
                ></textarea>
              </div>
              
              <Button variant="premium" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:pl-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-serif text-3xl text-navy mb-6">Contact Information</h2>
            <p className="text-navy/70 mb-8 max-w-md">
              Visit our flagship store or reach out through our customer service channels for personalized assistance.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-1">Flagship Store</h3>
                  <p className="text-navy/70 text-sm">
                    Avenida Atlântica, 1702 <br />
                    Copacabana, Rio de Janeiro <br />
                    Brazil
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-1">Email</h3>
                  <p className="text-navy/70 text-sm">
                    <a href="mailto:contact@praialuxo.com" className="hover:text-navy transition-colors">
                      contact@praialuxo.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-1">Phone</h3>
                  <p className="text-navy/70 text-sm">
                    <a href="tel:+552122556677" className="hover:text-navy transition-colors">
                      +55 21 2255 6677
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-navy/10">
              <h3 className="font-medium text-navy mb-4">Store Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-navy/70">Monday - Friday</p>
                  <p className="font-medium">10:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="text-navy/70">Saturday - Sunday</p>
                  <p className="font-medium">11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
