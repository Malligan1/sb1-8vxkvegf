import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'The Ultimate Guide to Winter 4WD Adventures',
    excerpt: 'Discover everything you need to know about safe and enjoyable winter off-roading, from essential gear to expert driving techniques.',
    author: 'Mike Johnson',
    date: '1/20/2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
    category: 'Adventure Guide'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Essential 4WD Accessories for Your First Off-Road Adventure',
      excerpt: 'New to off-roading? Here are the must-have accessories that will keep you safe and prepared.',
      author: 'Sarah Wilson',
      date: '1/18/2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      category: 'Beginner Guide'
    },
    {
      id: 3,
      title: 'Bull Bar Installation: Professional vs DIY',
      excerpt: 'Weighing your options for bull bar installation? We break down the pros and cons.',
      author: 'Tom Anderson',
      date: '1/15/2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      category: 'Installation'
    },
    {
      id: 4,
      title: 'Top 5 Camping Spots for 4WD Enthusiasts',
      excerpt: 'Discover Australia\'s most spectacular camping destinations accessible only by 4WD.',
      author: 'Emma Davis',
      date: '1/12/2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/2422462/pexels-photo-2422462.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      category: 'Adventure'
    },
    {
      id: 5,
      title: 'Suspension Upgrades: What You Need to Know',
      excerpt: 'Everything about upgrading your 4WD suspension for better performance and comfort.',
      author: 'Jake Mitchell',
      date: '1/10/2025',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3848538/pexels-photo-3848538.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      category: 'Technical'
    },
    {
      id: 6,
      title: 'Recovery Gear Essentials: Be Prepared for Anything',
      excerpt: 'The essential recovery gear every 4WD enthusiast should carry on their adventures.',
      author: 'Lisa Thompson',
      date: '1/8/2025',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
      category: 'Safety'
    }
  ];

  const categories = ['All', 'Adventure Guide', 'Beginner Guide', 'Installation', 'Technical', 'Safety', 'Adventure'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">4WD Blog & Resources</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert advice, installation guides, and adventure stories from the Australian 4WD community
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-[#F05A28] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="ml-3 text-[#F05A28] text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center text-[#F05A28] font-semibold hover:text-[#E04A1F] transition-colors group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  category === 'All' 
                    ? 'bg-[#F05A28] text-white' 
                    : 'bg-white text-gray-600 hover:bg-[#F05A28] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-[#F05A28] text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#F05A28] transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-[#F05A28]">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#F05A28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest 4WD tips, product reviews, and adventure stories delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;