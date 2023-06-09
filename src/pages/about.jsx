import React from 'react';

import AboutUs from '../components/about/AboutUs';
import Banner from '../components/about/Banner';
import Features from '../components/about/Features';
import Hero from '../components/about/Hero';
import Stats from '../components/about/Stats';

import Testimonials from '../components/common/Testimonials';
import Seo from '../components/Seo';

function about() {
  return (
    <div>
      <Seo templateTitle='About' />
      <Hero />
      <AboutUs />
      <Stats />
      <Features />
      <Banner />
      <div className='mb-[5rem] ' />
      <Testimonials />
    </div>
  );
}

export default about;
