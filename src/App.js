import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Agency from './components/Agency';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Process />
      <Agency />
      <Portfolio />
      <Partners />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
