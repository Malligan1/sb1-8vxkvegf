import React from 'react';
// import ARBLogo from '../assets/ARB_LOGO_HERE';
// import IronmanLogo from '../assets/IRONMAN_LOGO_HERE';
// import TJMLogo from '../assets/TJM_LOGO_HERE';
// import KingsLogo from '../assets/KINGS_LOGO_HERE';
// import OppositeLockLogo from '../assets/OPPOSITE_LOCK_LOGO_HERE';
// import SafariLogo from '../assets/SAFARI_LOGO_HERE';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'ARB',
      logo: 'https://via.placeholder.com/200x100/E5E7EB/9CA3AF?text=ARB'
    },
    {
      id: 2,
      name: 'Ironman 4×4',
      logo: 'https://via.placeholder.com/200x100/E5E7EB/9CA3AF?text=Ironman+4x4'
    },
    {
      id: 3,
      name: 'TJM',
      logo: 'https://via.placeholder.com/200x100/E5E7EB/9CA3AF?text=TJM'
    },
    {
      id: 4,
      name: 'Kings',
      logo: 'https://via.placeholder.com/200x100/E5E7EB/9CA3AF?text=Kings'
    },
    {
      id: 5,
      name: 'Opposite Lock',
      logo: 'https://via.placeholder.com/200x100/E5E7EB/9CA3AF?text=Opposite+Lock'
    },
    {
      id: 6,
      name: 'Safari',
      logo: 'https://via.placeholder.com/200x100/E5E7EB/9CA3AF?text=Safari'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">
            We partner with Australia's most trusted 4WD brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
            >
              <img 
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;