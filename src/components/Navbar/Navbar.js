import React from 'react';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AllPlaces } from '../AllPlaces/AllPlaces';
import { MyPlaces } from '../MyPlaces/MyPlaces';
import { PlaceDetails } from '../PlaceDetails/PlaceDetails';
import { Dropdown } from '../UI/Dropdown';
import { Brand, Li, Ul, Label, InputNav, SearchBar, NavBarDiv, NavLink } from './NavBar.styles';

export function NavBar() {

  const links = ['Bars', 'Museums', 'Restaurants', 'Other' ]
  return (
    <Router>
      <NavBarDiv>
        <Ul>
        <Brand><NavLink to='/'>Accessibility</NavLink></Brand>
          <Li><NavLink to='/myPlaces' >My Places</NavLink></Li>
          <Li><Dropdown links={links}></Dropdown></Li>
          <SearchBar>
            <Label>Search:</Label>
            <InputNav></InputNav>
          </SearchBar>
        </Ul>

      </NavBarDiv>
      <Switch>
        <Route path="/" exact>
          <AllPlaces />
        </Route>
        <Route path="/myPlaces">
          <MyPlaces />
        </Route>
        <Route path="/placeDetails/:id" component={PlaceDetails}/>
      </Switch>
    </Router>
  )
}