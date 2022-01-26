import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Career from './pages/Career';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
