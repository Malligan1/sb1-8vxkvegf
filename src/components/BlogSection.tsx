import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import RooLogo from '../../assets/ROO-OFFROAD LOGO.png';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Essential 4WD Accessories for Your First Off-Road Adventure',
      excerpt: 'Discover the must-have accessories that will make your first off-road journey safe and enjoyable.',
      author: 'Mike Johnson',
      date: '1/15/2025',
      image: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      slug: 'essential-4wd-accessories'
    },
    {
      id: 2,
      title: 'How to Choose the Right Bull Bar for Your Vehicle',
      excerpt: 'A comprehensive guide to selecting the perfect bull bar for protection and style.',
      author: 'Sarah Wilson',
      date: '1/12/2025',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      slug: 'choosing-right-bull-bar'
    },
    {
      id: 3,
      title: 'Winter Camping Setup: Awnings and Shelter Solutions',
      excerpt: 'Stay warm and dry during winter adventures with the right camping setup and gear.',
      author: 'Tom Anderson',
      date: '1/10/2025',
      image: 'https://images.pexels.com/photos/2422462/pexels-photo-2422462.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      slug: 'winter-camping-setup'
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Large Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=1')`
          }}
        ></div>
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/95"></div>
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-transparent to-gray-900/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-start justify-between">
            <div className="text-left flex-1 max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight drop-shadow-sm">
                TIPS AND<br />
                INSPIRATION TO<br />
                GET YOU MOVING
              </h2>
              <Link 
                to="/blog"
                className="inline-flex items-center bg-[#F05A28] text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#E04A1F] transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                CHECK OUT OUR BLOG
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 flex justify-end">
              <div 
                className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-cover bg-center bg-no-repeat shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                style={{
                  backgroundImage: `url(${RooLogo})`,
                  backgroundSize: 'cover'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-white/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#F05A28] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <p className="text-lg text-gray-700 mb-8 font-medium">
              Expert advice, installation guides, and adventure stories from the 4WD community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;