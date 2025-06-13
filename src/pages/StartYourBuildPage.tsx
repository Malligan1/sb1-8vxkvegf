import React, { useState } from 'react';
import { Car, Target, Wrench, Share2, Check, ArrowRight, Upload } from 'lucide-react';

const StartYourBuildPage: React.FC = () => {
  const [selectedBuildType, setSelectedBuildType] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const buildTypes = [
    {
      id: 'weekend-warrior',
      title: 'Weekend Warrior',
      description: 'Perfect for recreational off-roading and camping trips',
      features: ['Bull bar protection', 'Basic recovery gear', 'Camping essentials', 'LED lighting'],
      priceRange: '$2,000 - $5,000',
      image: 'https://images.pexels.com/photos/2422462/pexels-photo-2422462.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 'adventure-seeker',
      title: 'Adventure Seeker',
      description: 'For serious off-road adventures and extended touring',
      features: ['Heavy-duty suspension', 'Long-range fuel tanks', 'Touring accessories', 'Communications'],
      priceRange: '$5,000 - $10,000',
      image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 'extreme-explorer',
      title: 'Extreme Explorer',
      description: 'Ultimate setup for the most challenging terrain and expeditions',
      features: ['Premium suspension', 'Winch & recovery', 'Long-range setup', 'Professional grade'],
      priceRange: '$10,000+',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  const budgetRanges = [
    { id: 'budget-friendly', label: 'Budget Friendly', range: '$1,000 - $3,000' },
    { id: 'mid-range', label: 'Mid Range', range: '$3,000 - $7,000' },
    { id: 'premium', label: 'Premium', range: '$7,000 - $15,000' },
    { id: 'ultimate', label: 'Ultimate', range: '$15,000+' }
  ];

  const buildSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Discuss your needs, budget, and vehicle requirements with our experts'
    },
    {
      step: 2,
      title: 'Design',
      description: 'We create a custom build plan tailored to your specific requirements'
    },
    {
      step: 3,
      title: 'Installation',
      description: 'Professional installation by certified technicians with quality guarantee'
    },
    {
      step: 4,
      title: 'Support',
      description: 'Ongoing support, maintenance advice, and warranty coverage'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Start Your Custom Build</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your 4WD into the ultimate adventure machine with our expert custom build service. 
              From concept to completion, we'll help you create the perfect setup for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Build Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Build Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the build type that matches your adventure style and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buildTypes.map((build) => (
              <div
                key={build.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group ${
                  selectedBuildType === build.id ? 'ring-4 ring-[#F05A28]' : ''
                }`}
                onClick={() => setSelectedBuildType(build.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{build.title}</h3>
                    {selectedBuildType === build.id && (
                      <div className="w-6 h-6 bg-[#F05A28] rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{build.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {build.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-[#F05A28] mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-[#F05A28] font-bold text-lg">{build.priceRange}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Selection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Your Budget?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us recommend the best accessories and packages within your budget range
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {budgetRanges.map((budget) => (
              <div
                key={budget.id}
                className={`bg-gray-50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedBudget === budget.id ? 'bg-[#F05A28] text-white' : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedBudget(budget.id)}
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">{budget.label}</h3>
                  <p className={`text-lg font-semibold ${
                    selectedBudget === budget.id ? 'text-white' : 'text-[#F05A28]'
                  }`}>
                    {budget.range}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Build Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we guide you through every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#F05A28] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {step.step}
                  </div>
                  {index < buildSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Upload */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Share Your Vehicle</h2>
            <p className="text-xl text-gray-600">
              Upload photos of your current setup so we can provide the most accurate recommendations
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#F05A28] transition-colors">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Vehicle Photos</h3>
              <p className="text-gray-600 mb-4">
                Drag and drop your photos here, or click to select files
              </p>
              <button className="bg-[#F05A28] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E04A1F] transition-colors">
                Select Photos
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Supported formats: JPG, PNG, WebP (Max 10MB each)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#F05A28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Start Building</h2>
            <p className="text-xl text-white/90">
              Ready to transform your 4WD? Get in touch and we'll schedule your consultation
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    placeholder="Enter your phone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Details *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    placeholder="e.g., 2020 Toyota Hilux SR5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Adventure Plans
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent resize-none"
                  placeholder="Describe your typical adventures, where you like to go, and what you want to achieve with your build..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#F05A28] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E04A1F] transition-colors flex items-center mx-auto group"
                >
                  Start My Build Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Tailored Solutions',
                description: 'Every build is customized to your specific needs, vehicle, and adventure style.'
              },
              {
                icon: <Wrench className="h-8 w-8" />,
                title: 'Expert Installation',
                description: 'Professional installation by certified technicians with comprehensive warranties.'
              },
              {
                icon: <Share2 className="h-8 w-8" />,
                title: 'Ongoing Support',
                description: 'Continued support, maintenance advice, and upgrade recommendations as you grow.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="bg-[#F05A28] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartYourBuildPage;