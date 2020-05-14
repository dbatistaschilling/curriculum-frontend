import React from 'react';

import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Skill from './components/pages/Skill';
import Experience from './components/pages/Experience';

// import './App.css';


function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Service />
      <Skill />
      <Experience />
      <Footer />
    </div>
  );
}



export default App;
