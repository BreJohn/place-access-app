import React from 'react';
import './App.css';
import { NavBar } from './Navbar/Navbar';
import { Place } from './Place/Place';
import places from './assets/Places.json';


function App() {
  const placeArray = places;
  return (
    <div className="App" >
      <NavBar></NavBar>
      {placeArray
      .map(
        item => <Place placeInfo= {item} key={item.index}></Place>
      )
      }
    </div>
  );
}

export default App;
