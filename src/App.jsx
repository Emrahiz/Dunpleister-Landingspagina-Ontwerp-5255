import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NieuwbouwStucenPage from './pages/NieuwbouwStucenPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nieuwbouw-stucen" element={<NieuwbouwStucenPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;