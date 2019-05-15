import React from 'react';
import '../App.css';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Process from './Process';
import Agency from './Agency';
import Portfolio from './Portfolio';
import Partners from './Partners';

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
