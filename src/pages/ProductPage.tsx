import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, ArrowLeft, Plus, Minus, Check } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');

  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    name: 'ARB Deluxe Bull Bar - Toyota Hilux 2015-2023',
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    stockCount: 8,
    sku: 'ARB-3423050',
    brand: 'ARB',
    category: 'Bull Bars',
    images: [
      'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/3848538/pexels-photo-3848538.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    description: `The ARB Deluxe Bull Bar is engineered to provide maximum protection for your Toyota Hilux while maintaining the vehicle's approach angle and airflow to the radiator. Constructed from 3mm steel tubing and featuring ARB's renowned build quality, this bull bar is designed to withstand the harshest Australian conditions.

    This bull bar is specifically designed for Toyota Hilux models from 2015-2023 and includes mounting points for ARB driving lights, UHF antennas, and recovery points. The powder-coated finish ensures long-lasting durability and resistance to corrosion.`,
    features: [
      '3mm steel tube construction',
      'Maintains approach angle',
      'Integrated recovery points',
      'Driving light mounting tabs',
      'UHF antenna mounting points',
      'Powder-coated finish',
      'ADR compliant',
      'Airbag compatible'
    ],
    specifications: {
      'Material': '3mm Steel Tube',
      'Finish': 'Textured Black Powder Coat',
      'Weight': '45kg',
      'Compatibility': 'Toyota Hilux 2015-2023',
      'Recovery Points': '2 x Rated Recovery Points',
      'Warranty': '3 Years',
      'ADR Compliance': 'Yes',
      'Airbag Compatible': 'Yes'
    },
    installation: {
      difficulty: 'Professional Installation Recommended',
      time: '3-4 hours',
      tools: 'Standard workshop tools required',
      notes: 'Some drilling may be required. Professional installation ensures warranty compliance.'
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'ARB Driving Light Kit',
      price: 299,
      image: 'https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      rating: 4.7
    },
    {
      id: 3,
      name: 'ARB Recovery Kit',
      price: 359,
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      rating: 4.8
    },
    {
      id: 4,
      name: 'ARB Side Steps',
      price: 449,
      image: 'https://images.pexels.com/photos/3848538/pexels-photo-3848538.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      rating: 4.6
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Mike Johnson',
      rating: 5,
      date: '2 weeks ago',
      title: 'Excellent quality and fit',
      content: 'Perfect fit on my 2020 Hilux. Installation was straightforward and the build quality is outstanding. Highly recommended!'
    },
    {
      id: 2,
      author: 'Sarah Wilson',
      rating: 4,
      date: '1 month ago',
      title: 'Great protection',
      content: 'Solid bull bar that has already saved my front end from a kangaroo strike. Worth every penny for the peace of mind.'
    },
    {
      id: 3,
      author: 'Tom Anderson',
      rating: 5,
      date: '2 months ago',
      title: 'Professional installation recommended',
      content: 'Had this professionally installed and it looks fantastic. The powder coating is top quality and should last for years.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <button className="flex items-center hover:text-[#F05A28] transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Shop
          </button>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#F05A28]' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[#F05A28] font-semibold">{product.brand}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">SKU: {product.sku}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-[#F05A28]">${product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save ${product.originalPrice - product.price}
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {product.inStock ? (
                  <>
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-semibold">In Stock ({product.stockCount} available)</span>
                  </>
                ) : (
                  <span className="text-red-600 font-semibold">Out of Stock</span>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    product.inStock
                      ? 'bg-[#F05A28] text-white hover:bg-[#E04A1F]'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>

              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-[#F05A28]" />
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-[#F05A28]" />
                <div>
                  <p className="font-semibold">3 Year Warranty</p>
                  <p className="text-sm text-gray-600">Manufacturer warranty included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'installation', label: 'Installation' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    selectedTab === tab.id
                      ? 'border-[#F05A28] text-[#F05A28]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {selectedTab === 'description' && (
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-[#F05A28] mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'installation' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Difficulty</h4>
                    <p className="text-gray-600">{product.installation.difficulty}</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Time Required</h4>
                    <p className="text-gray-600">{product.installation.time}</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Tools Needed</h4>
                    <p className="text-gray-600">{product.installation.tools}</p>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Installation Notes</h4>
                  <p className="text-blue-800">{product.installation.notes}</p>
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Customer Reviews</h3>
                  <button className="bg-[#F05A28] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#E04A1F] transition-colors">
                    Write a Review
                  </button>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-gray-900">{review.author}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                      <p className="text-gray-600">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#F05A28]">${relatedProduct.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;