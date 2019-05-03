import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Agency from './components/Agency';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Process />
      <Agency />
    </div>
  );
}

export default App;
