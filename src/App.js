import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Agency from './components/Agency';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const Home = () => {
  return (
    <div className="App">
      <NavBar />
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

export default Home;
