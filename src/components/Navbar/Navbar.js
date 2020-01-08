import React from 'react';
import './Navbar.css';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from '../../App';
import { AllPlaces } from '../AllPlaces/AllPlaces';
import { MyPlaces } from '../MyPlaces/MyPlaces';

export function NavBar() {
    const NavButton = styled.div`
	:hover {
		color: white;
        cursor: pointer;
    }
	`;
    return (
        <Router>
            <div className="navBar">
                <ul>
                    <Link to='/home'><li><NavButton className="navItem brand">Accessibility</NavButton></li></Link>
                    <Link to='/allPlaces'><li><NavButton className="navItem">All Places</NavButton></li></Link>
                    <Link to='/myPlaces'><li><NavButton className="navItem">My Places</NavButton></li></Link>
                    <li className="searchBar">
                        <label>Search:</label>
                        <input className="inputNav"></input>
                    </li>
                </ul>

            </div>
            <Switch>
          <Route path="/home">
            <App />
          </Route>
          <Route path="/allPlaces">
            <AllPlaces />
          </Route>
          <Route path="/myPlaces">
            <MyPlaces/>
          </Route>
        </Switch>
        </Router>
    )
}