import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBar from './components/Navbar/NavBar';
import Footers from './components/Footers/Footers';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Accueil from './pages/Accueil';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Accueil />} />
            <Route path="/skills" element={<Accueil />} />
            <Route path="/testimonials" element={<Accueil />} />
          </Routes>
        </main>
        <Footers />
      </div>
    </Router>
  );
}

export default App;
