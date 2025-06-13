import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCategories from '../components/ProductCategories';
import BlogSection from '../components/BlogSection';
import PartnersSection from '../components/PartnersSection';
import AdventureSlideshow from '../components/AdventureSlideshow';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <BlogSection />
      <PartnersSection />
      <AdventureSlideshow />
    </div>
  );
};

export default HomePage;