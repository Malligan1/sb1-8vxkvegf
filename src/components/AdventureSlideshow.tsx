import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Instagram, ExternalLink } from 'lucide-react';

const AdventureSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const adventureSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      title: 'Desert Expedition',
      location: 'Simpson Desert, NT',
      description: 'Conquering the red heart of Australia with premium 4WD gear'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/2422462/pexels-photo-2422462.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      title: 'Mountain Adventure',
      location: 'Blue Mountains, NSW',
      description: 'Perfect camping setup for weekend mountain escapes'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      title: 'Coastal Touring',
      location: 'Great Ocean Road, VIC',
      description: 'Fully equipped for the ultimate coastal touring experience'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      title: 'Outback Journey',
      location: 'Kimberley Region, WA',
      description: 'Remote wilderness adventures with professional-grade equipment'
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % adventureSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, adventureSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + adventureSlides.length) % adventureSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % adventureSlides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Follow Our Adventure</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join us on epic journeys across Australia's most challenging terrain, 
            showcasing the reliability and performance of premium 4WD accessories.
          </p>
          
          {/* Instagram Button */}
          <div className="flex items-center justify-center">
            <a 
              href="https://www.instagram.com/roooffroad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Instagram className="mr-3 h-6 w-6" />
              Follow @roooffroad
              <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Main Slideshow Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            {/* Slides */}
            {adventureSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Slide Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="max-w-2xl">
                    <div className="mb-3">
                      <span className="inline-block bg-[#F05A28] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {slide.location}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 md:top-8 right-4 md:right-8 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {adventureSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#F05A28] scale-125'
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F05A28] transition-all duration-300 ease-linear"
                style={{
                  width: `${((currentSlide + 1) / adventureSlides.length) * 100}%`
                }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>{currentSlide + 1} of {adventureSlides.length}</span>
              <span>{isPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to create your own adventure story? Let us equip your 4WD with the gear 
            that makes these incredible journeys possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F05A28] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E04A1F] transition-colors duration-300">
              Start Your Build
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
              View Our Gear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureSlideshow;