import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
// import SocialImage1 from '../assets/SOCIAL_IMAGE_1_HERE';
// import SocialImage2 from '../assets/SOCIAL_IMAGE_2_HERE';
// import SocialImage3 from '../assets/SOCIAL_IMAGE_3_HERE';
// import SocialImage4 from '../assets/SOCIAL_IMAGE_4_HERE';
// import SocialImage5 from '../assets/SOCIAL_IMAGE_5_HERE';
// import SocialImage6 from '../assets/SOCIAL_IMAGE_6_HERE';

const SocialGallery: React.FC = () => {
  const socialPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      caption: 'Epic weekend adventure with the crew! #RooOffroad #4WD',
      likes: 234
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      caption: 'New bull bar installation looking fresh! #Protection #Style',
      likes: 189
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2422462/pexels-photo-2422462.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      caption: 'Perfect camping setup for the weekend getaway ⛺',
      likes: 301
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      caption: 'Night drive made easy with premium lighting! 💡',
      likes: 156
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      caption: 'Desert exploration at its finest 🏜️ #Adventure',
      likes: 278
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3848538/pexels-photo-3848538.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      caption: 'Suspension upgrade complete! Ready for anything 🚗',
      likes: 167
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Follow Our Adventures</h2>
          <p className="text-xl text-gray-300 mb-6">
            Join our community and share your 4WD stories
          </p>
          <div className="flex items-center justify-center space-x-2 text-[#F05A28]">
            <Instagram className="h-6 w-6" />
            <span className="text-lg font-semibold">@roooffroad</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post) => (
            <div 
              key={post.id}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={post.image}
                  alt={`Social post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm mb-3 leading-relaxed">{post.caption}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">❤️ {post.likes} likes</span>
                    <ExternalLink className="h-4 w-4 text-[#F05A28]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center bg-[#F05A28] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E04A1F] transition-colors duration-300 group"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow Us on Instagram
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialGallery;