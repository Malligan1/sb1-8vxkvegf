import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield } from 'lucide-react';
import HeroDesktop from '../../assets/car_1_converted.png';
import HeroMobile from '../../assets/hero-mobile.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[700px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
      
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed brightness-110 hidden md:block"
        style={{
          backgroundImage: `url('${HeroDesktop}')`,
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110 md:hidden"
        style={{
          backgroundImage: `url('${HeroMobile}')`
        }}
      ></div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10"></div>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full">
          <div className="text-white max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-7xl md:text-8xl font-black leading-tight mb-8 tracking-tight">
              <span className="text-white drop-shadow-2xl">COMPLETE</span>
              <br />
              <span className="text-[#F05A28] drop-shadow-2xl">4X4</span>
              <br />
              <span className="text-white drop-shadow-2xl">SOLUTIONS</span>
            </h1>
            
            {/* Subheading */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 tracking-wide drop-shadow-lg">
                Suspension • Protection • Lighting • Touring • Recovery
              </h2>
            </div>
            
            {/* Tagline */}
            <div className="mb-10">
              <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide drop-shadow-md">
                Professional Fitment. Quality Gear. Built to Last.
              </p>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/shop"
                className="bg-[#F05A28] text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#E04A1F] transition-all duration-300 flex items-center justify-center group shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                <Shield className="mr-3 h-6 w-6" />
                Shop Premium Gear
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/start-your-build"
                className="border-3 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center shadow-2xl backdrop-blur-sm bg-white/10 hover:bg-white/100"
              >
                <Wrench className="mr-3 h-6 w-6" />
                Professional Fitment
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F05A28] rounded-full mr-3"></div>
                <span className="font-semibold">Certified Technicians</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F05A28] rounded-full mr-3"></div>
                <span className="font-semibold">Premium Brands Only</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#F05A28] rounded-full mr-3"></div>
                <span className="font-semibold">Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;