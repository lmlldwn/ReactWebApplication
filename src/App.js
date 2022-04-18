import './App.css';
import Navbar from './components/Navbar';

//import {useState} from 'react';
import React from 'react';

//external functions
import About from "./components/About";
import Content from "./components/Content";
import Home from "./components/Home";

//images
//import icon from './bin/RimuruTempest.png';
import { 
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="content" element={<Content />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
