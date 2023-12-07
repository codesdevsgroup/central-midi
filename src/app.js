import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/widgets/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import './app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;