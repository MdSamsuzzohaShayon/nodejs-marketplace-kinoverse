import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Career from './pages/Career';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/elements/Navbar';
import Admin from './pages/Admin';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
