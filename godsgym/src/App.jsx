import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';
import Features from './components/Features'; // ✅ make sure this path is correct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} /> {/* ✅ Added Features Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
