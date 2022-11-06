import React from "react";
import "./Navbar.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../../App";
import { AllPlaces } from "../AllPlaces/AllPlaces";
import { MyPlaces } from "../MyPlaces/MyPlaces";

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
        <Link to="/">
          <NavButton className="navItem brand">Accessibility</NavButton>
        </Link>
        <Link to="/allPlaces">
          <NavButton className="navItem">All Places</NavButton>
        </Link>
        <Link to="/myPlaces">
          <NavButton className="navItem">My Places</NavButton>
        </Link>
        <div className="searchBar">
          <label>Search:</label>
          <input className="inputNav"></input>
        </div>
      </div>
      <Switch>
        <Route path="/home">
          <App />
        </Route>
        <Route path="/allPlaces">
          <AllPlaces />
        </Route>
        <Route path="/myPlaces">
          <MyPlaces />
        </Route>
      </Switch>
    </Router>
  );
}
