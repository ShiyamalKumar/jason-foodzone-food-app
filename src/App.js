import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Foods from './pages/Foods';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<React.Fragment><Homepage /></React.Fragment>} />
          <Route path="/foods" element={<React.Fragment><Foods /></React.Fragment>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;







