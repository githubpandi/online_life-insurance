// src/Home.js
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import MyCarousel from './MyCarousel';
import ProductsMain from './ProductMain';
import Footer from './Footer';

function Home() {
  return (
    <div >
      <Header/>
      <HeroSection />
      <FeatureSection/>
      <MyCarousel/>
      <ProductsMain/>

     
      <Footer />
    </div>
  );
}

export default Home;
