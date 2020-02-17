import React from 'react';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
 
library.add(fab, faStar)

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <NavBar></NavBar>
      </div>
    </BrowserRouter>
  );
}

export default App;
