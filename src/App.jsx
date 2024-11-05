// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';

console.log("App component initializing");

const App = () => {
  console.log("App component rendered");

  return (
    <Router>
      <Routes>
        {console.log("Setting up Routes")}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;