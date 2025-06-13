import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCategories: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: 'Bull Bars',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
      link: '/shop/bull-bars'
    },
    {
      id: 2,
      title: 'Suspension',
      image: 'https://images.pexels.com/photos/3848538/pexels-photo-3848538.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
      link: '/shop/suspension'
    },
    {
      id: 3,
      title: 'Camping & Touring',
      image: 'https://images.pexels.com/photos/2422462/pexels-photo-2422462.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
      link: '/shop/camping'
    },
    {
      id: 4,
      title: 'Vehicle Lighting',
      image: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
      link: '/shop/lighting'
    },
    {
      id: 5,
      title: 'Roof Racks & Cross Bars',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
      link: '/shop/roof-racks'
    },
    {
      id: 6,
      title: 'Recovery Gear',
      image: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1',
      link: '/shop/recovery'
    }
  ];

  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Animated Forest Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary forest layer with slow drift animation */}
        <div 
          className="absolute inset-0 w-[120%] h-full bg-cover bg-center bg-no-repeat animate-drift-slow"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        ></div>
        
        {/* Secondary forest layer for depth */}
        <div 
          className="absolute inset-0 w-[110%] h-full bg-cover bg-center bg-no-repeat opacity-60 animate-drift-slower"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        ></div>

        {/* Gradient overlays for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900/90"></div>
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            EXPLORE OUR RANGE
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Premium 4WD accessories designed for Australia's toughest terrain
          </p>
        </div>

        {/* Product Categories Grid - 2 rows of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Category Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500"></div>
              
              {/* Subtle border glow effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F05A28]/30 rounded-2xl transition-all duration-500"></div>
              
              <div className="relative z-10 h-full flex items-end p-6">
                <div className="text-white w-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#F05A28] transition-colors duration-500 drop-shadow-lg">
                    {category.title}
                  </h3>
                  <div className="flex items-center text-white/90 group-hover:text-[#F05A28] transition-all duration-500">
                    <span className="mr-2 text-base font-semibold">Explore Range</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 shadow-inner opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-base text-gray-200 mb-6 font-medium drop-shadow-md">
              Can't find what you're looking for? Our experts are here to help you find the perfect accessories for your adventure.
            </p>
            <button className="bg-[#F05A28] text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-[#E04A1F] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Get Expert Advice
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for drift animations */}
      <style jsx>{`
        @keyframes drift-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-10%);
          }
        }

        @keyframes drift-slower {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-5%);
          }
        }

        .animate-drift-slow {
          animation: drift-slow 120s linear infinite;
        }

        .animate-drift-slower {
          animation: drift-slower 180s linear infinite;
        }

        /* Ensure smooth performance */
        .animate-drift-slow,
        .animate-drift-slower {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ProductCategories;