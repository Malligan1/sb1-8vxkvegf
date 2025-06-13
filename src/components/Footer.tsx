import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import FooterImage from '../../assets/roo-offroad footer shot.jpeg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={FooterImage} 
          alt="Roo Offroad Footer" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={FooterImage} 
                alt="Roo Offroad" 
                className="h-40 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Australia's premier destination for quality 4WD accessories and expert advice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/start-your-build" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                  Custom Builds
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#F05A28] transition-colors">
                  Expert Advice
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#F05A28]" />
                <span className="text-gray-400">1300 ROO 4WD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#F05A28]" />
                <span className="text-gray-400">info@roooffroad.com.au</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#F05A28] mt-0.5" />
                <span className="text-gray-400">
                  123 Offroad Street<br />
                  Brisbane, QLD 4000<br />
                  Australia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Roo Offroad 4WD Accessories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;