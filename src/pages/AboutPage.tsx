import React from 'react';
import { Award, Users, Wrench, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality First',
      description: 'We only stock products from trusted brands that meet our rigorous quality standards.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Advice',
      description: 'Our team of 4WD enthusiasts provides personalized recommendations for your specific needs.'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Professional Installation',
      description: 'Get your accessories installed by certified technicians who know your vehicle inside out.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Community Focused',
      description: 'We\'re passionate about building the Australian 4WD community and sharing our love for adventure.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Roo Offroad</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For over a decade, we've been Australia's trusted partner for premium 4WD accessories, 
              expert advice, and professional installation services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Roo Offroad was born from a simple passion: the love of Australian adventure and the 
                  vehicles that make it possible. What started as a small workshop in Brisbane has grown 
                  into one of Australia's most trusted names in 4WD accessories.
                </p>
                <p>
                  We understand that every 4WD enthusiast has unique needs, whether you're a weekend 
                  warrior exploring local trails or planning an epic cross-country expedition. That's 
                  why we've built our reputation on providing personalized advice, quality products, 
                  and professional installation services.
                </p>
                <p>
                  Today, we continue to serve the Australian 4WD community with the same passion and 
                  dedication that founded our company, helping adventurers get the most out of their 
                  vehicles and their journeys.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 text-lg">Our Story Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#F05A28] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate 4WD enthusiasts dedicated to helping you achieve your adventure goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Team Member {member}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Member Name</h3>
                <p className="text-[#F05A28] font-semibold mb-3">Position Title</p>
                <p className="text-gray-600">
                  Brief description of team member's expertise and passion for 4WD adventures.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F05A28] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our team help you find the perfect accessories for your next 4WD adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#F05A28] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Visit Our Shop
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#F05A28] transition-colors">
              Get Expert Advice
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;