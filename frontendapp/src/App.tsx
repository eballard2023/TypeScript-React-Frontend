import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from "./Aboutme";

// importing redux store and provider
import { store } from './app/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    
    
    <Router>
        <div className="App">
            <Routes> 
                <Route path="/about-me" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </Router>
    
  );
};
