import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, ShoppingCart } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'bull-bars', name: 'Bull Bars', count: 24 },
    { id: 'suspension', name: 'Suspension', count: 18 },
    { id: 'camping', name: 'Camping & Touring', count: 32 },
    { id: 'lighting', name: 'Vehicle Lighting', count: 28 },
    { id: 'roof-racks', name: 'Roof Racks', count: 22 },
    { id: 'recovery', name: 'Recovery Gear', count: 16 },
    { id: 'accessories', name: 'Accessories', count: 16 }
  ];

  const products = [
    {
      id: 1,
      name: 'ARB Deluxe Bull Bar - Toyota Hilux',
      category: 'bull-bars',
      price: 1299,
      originalPrice: 1499,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      badge: 'Popular',
      inStock: true
    },
    {
      id: 2,
      name: 'Ironman 4x4 Foam Cell Suspension Kit',
      category: 'suspension',
      price: 2199,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/3848538/pexels-photo-3848538.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      badge: 'New',
      inStock: true
    },
    {
      id: 3,
      name: 'Kings Awning 2.5m x 2.5m',
      category: 'camping',
      price: 449,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/2422462/pexels-photo-2422462.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      badge: 'Sale',
      inStock: true
    },
    {
      id: 4,
      name: 'Lightforce LED Light Bar 20"',
      category: 'lighting',
      price: 699,
      originalPrice: 799,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      badge: 'Best Seller',
      inStock: true
    },
    {
      id: 5,
      name: 'Rhino Rack Pioneer Platform',
      category: 'roof-racks',
      price: 899,
      rating: 4.5,
      reviews: 78,
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      inStock: false
    },
    {
      id: 6,
      name: 'ARB Recovery Kit Complete',
      category: 'recovery',
      price: 359,
      rating: 4.8,
      reviews: 94,
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Sale': return 'bg-red-500';
      case 'New': return 'bg-green-500';
      case 'Popular': return 'bg-blue-500';
      case 'Best Seller': return 'bg-[#F05A28]';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Shop 4WD Accessories</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our extensive range of premium 4WD accessories from Australia's most trusted brands
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-[#F05A28] text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Price Range
                </label>
                <select 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="0-200">Under $200</option>
                  <option value="200-500">$200 - $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000+">$1,000+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Showing {filteredProducts.length} of {products.length} products
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Newest</option>
                  </select>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-[#F05A28] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-[#F05A28] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        viewMode === 'list' ? 'h-48' : 'h-48'
                      }`}
                    />
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white rounded-full ${getBadgeColor(product.badge)}`}>
                        {product.badge}
                      </span>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#F05A28] transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-[#F05A28]">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button
                        disabled={!product.inStock}
                        className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                          product.inStock
                            ? 'bg-[#F05A28] text-white hover:bg-[#E04A1F]'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    page === 1
                      ? 'bg-[#F05A28] text-white'
                      : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;