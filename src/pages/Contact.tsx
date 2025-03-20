
import React, { useEffect } from "react";
import Button from "@/components/ui/Button";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 sm:pt-32 pb-16">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-sm font-medium text-navy/70 uppercase tracking-wider mb-2 block">Get In Touch</span>
        <h1 className="font-serif text-4xl sm:text-5xl text-navy mb-4">Contact Us</h1>
        <p className="text-navy/70 text-lg max-w-2xl mx-auto">
          We'd love to hear from you. Reach out with any questions about our products or sustainability initiatives.
        </p>
      </div>

      {/* Contact Section */}
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-sand/20 p-8 rounded-lg shadow-sm animate-fade-in">
            <h2 className="font-serif text-3xl text-navy mb-6">Send Us a Message</h2>
            <p className="text-navy/70 mb-8">
              Fill out the form below and our team will get back to you as soon as possible.
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
                <label htmlFor="subject" className="block text-sm font-medium text-navy/70 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full p-3 border border-navy/10 rounded-md focus:outline-none focus:ring-1 focus:ring-navy/30"
                >
                  <option value="">Select a subject</option>
                  <option value="product">Product Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
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
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-2">Flagship Store</h3>
                  <p className="text-navy/70">
                    Avenida Atlântica, 1702 <br />
                    Copacabana, Rio de Janeiro <br />
                    Brazil
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-2">Email</h3>
                  <p className="text-navy/70">
                    <a href="mailto:contact@praialuxo.com" className="hover:text-navy transition-colors">
                      contact@praialuxo.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-2">Phone</h3>
                  <p className="text-navy/70">
                    <a href="tel:+552122556677" className="hover:text-navy transition-colors">
                      +55 21 2255 6677
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-navy" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-2">Store Hours</h3>
                  <div className="text-navy/70">
                    <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-navy/10">
              <h3 className="font-medium text-navy mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center text-navy hover:bg-sand transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center text-navy hover:bg-sand transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center text-navy hover:bg-sand transition-colors" aria-label="Pinterest">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" x2="12" y1="17" y2="22"/>
                    <path d="M7 8v8a5 5 0 0 0 10 0V8a7 7 0 1 0-14 0v8a9 9 0 0 0 18 0V8"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (placeholder) */}
      <div className="mt-16 h-[400px] bg-slate-200 relative animate-fade-in">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-navy/60">Map View</span>
            <p className="text-navy">Avenida Atlântica, 1702, Copacabana, Rio de Janeiro, Brazil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
