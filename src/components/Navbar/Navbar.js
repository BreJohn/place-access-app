import React from "react";
import "./Navbar.scss";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AllPlaces } from "../AllPlaces/AllPlaces";
import { MyPlaces } from "../MyPlaces/MyPlaces";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export function NavBar() {
  const NavBar = styled.div`
    background-color: hsl(264.71deg 100% 16.67%);
    height: 10vh;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const SearchBar = styled.div`
    border-radius: 25%;
    margin-right: 5vw !important;
  `;
  const NavButton = styled.div`
    font-weight: ${(props) => (props.brand ? 800 : "normal")};
    margin-left: ${(props) => (props.brand ? "5vw" : "0")};

    :hover {
      color: white;
      cursor: pointer;
    }
  `;

  const ContentWrapper = styled.div`
    height: 90vh;
  `;
  return (
    <Router>
      <NavBar>
        <Link to="/allPlaces">
          <NavButton brand>Accessibility</NavButton>
        </Link>
        <Link to="/allPlaces">
          <NavButton>All Places</NavButton>
        </Link>
        <Link to="/myPlaces">
          <NavButton>My Places</NavButton>
        </Link>
        <SearchBar>
          <label>Search:</label>
          <input className="inputNav"></input>
        </SearchBar>
      </NavBar>
      <Switch>
        <ContentWrapper>
          <Route exact path="/">
            <Redirect to="/allPlaces" />
          </Route>

          <Route path="/home" component={AllPlaces} />
          <Route path="/allPlaces" component={AllPlaces} />
          <Route path="/myPlaces" component={MyPlaces} />
          <Route path="/place-details/:id" component={PlaceDetails} />
        </ContentWrapper>
      </Switch>
    </Router>
  );
}
