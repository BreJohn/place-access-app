import React from 'react';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AllPlaces } from '../AllPlaces/AllPlaces';
import { MyPlaces } from '../MyPlaces/MyPlaces';
import { PlaceDetails } from '../PlaceDetails/PlaceDetails';
import { Dropdown } from '../UI/Dropdown';

export function NavBar() {

  const links = ['Bars', 'Museums', 'Restaurants', 'Other' ]
  return (
    <Router>
      <div className="navBar">
        <ul>
          <li><Link to='/' className="navItem brand">Accessibility</Link></li>
          <li><Link to='/myPlaces' className="navItem">My Places</Link></li>
          <li><Dropdown links={links}></Dropdown></li>
          <li className="searchBar">
            <label>Search:</label>
            <input className="inputNav"></input>
          </li>
        </ul>

      </div>
      <Switch>
        <Route path="/" exact>
          <AllPlaces />
        </Route>
        <Route path="/myPlaces">
          <MyPlaces />
        </Route>
        <Route path="/pl
        aceDetails/:id" component={PlaceDetails}/>
      </Switch>
    </Router>
  )
}