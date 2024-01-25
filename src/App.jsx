// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Homepage} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
