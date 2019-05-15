import React from 'react';
import '../../App.css';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Agency from '../sections/Agency';
import Portfolio from '../sections/Portfolio';
import Partners from '../sections/Partners';

const HomePage = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Process />
      <Agency />
      <Portfolio />
      <Partners />
    </div>
  );
};

export default HomePage;
