import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import NavbarLogo from '../../assets/ROO-OFFROAD_NEON_800x800.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/shop"
              className={`text-sm font-medium hover:text-[#F05A28] transition-colors ${
                isActive('/shop') ? 'text-[#F05A28]' : ''
              }`}
            >
              Shop
            </Link>
            <Link
              to="/start-your-build"
              className={`text-sm font-medium hover:text-[#F05A28] transition-colors ${
                isActive('/start-your-build') ? 'text-[#F05A28]' : ''
              }`}
            >
              Start Your Build
            </Link>
            <Link
              to="/quote"
              className={`text-sm font-medium hover:text-[#F05A28] transition-colors ${
                isActive('/quote') ? 'text-[#F05A28]' : ''
              }`}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={NavbarLogo} 
                alt="Roo Offroad" 
                className="max-h-24 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className={`text-sm font-medium hover:text-[#F05A28] transition-colors ${
                isActive('/about') ? 'text-[#F05A28]' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium hover:text-[#F05A28] transition-colors ${
                isActive('/blog') ? 'text-[#F05A28]' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium hover:text-[#F05A28] transition-colors ${
                isActive('/contact') ? 'text-[#F05A28]' : ''
              }`}
            >
              Contact Us
            </Link>
            
            <div className="flex items-center space-x-4 ml-6">
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#F05A28] rounded-full flex items-center justify-center text-xs font-bold">
                  0
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                to="/shop"
                className="block px-4 py-2 text-sm font-medium hover:text-[#F05A28] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/start-your-build"
                className="block px-4 py-2 text-sm font-medium hover:text-[#F05A28] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Your Build
              </Link>
              <Link
                to="/quote"
                className="block px-4 py-2 text-sm font-medium hover:text-[#F05A28] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-sm font-medium hover:text-[#F05A28] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-2 text-sm font-medium hover:text-[#F05A28] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-sm font-medium hover:text-[#F05A28] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;