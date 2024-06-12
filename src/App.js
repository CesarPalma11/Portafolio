import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/About/About';
import { AnimatePresence } from 'framer-motion';
import Contact from './components/Contact/Contact';
import Projects from './components/Proyect/Projects';

function App() {
  return (
    <Router>
      <Navbar /> 
      <AnimatePresence mode='wait'>
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/about-me" element={<About />}/> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/projects" element={<Projects />} /> 
        
      </Routes>
      
      </AnimatePresence>
    
    </Router>
    
  );
}

export default App;