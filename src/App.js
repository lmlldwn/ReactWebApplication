import './App.css';

import React from 'react';

//external functions
import Navbar from './components/Navbar';
import About from "./components/About";
import Game from "./components/Game";
import Joke from './components/Joke';


import { 
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';


function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Game />} />
            <Route path="joke" element={<Joke />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
