
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Welcome message="Welcome to my React App!" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
