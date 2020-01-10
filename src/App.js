import React from 'react';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';


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
