import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
