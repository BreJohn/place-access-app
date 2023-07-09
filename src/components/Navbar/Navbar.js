import React from "react";
import "./Navbar.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Routes from "../Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

export function NavBar() {
  const NavbarContainer = styled.div`
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
      <ContentWrapper>
        <NavbarContainer>
          <Link to="/allPlaces">
            <NavButton brand>Accessibility</NavButton>
          </Link>
          <Link to="/allPlaces">
            <NavButton>All Places</NavButton>
          </Link>
          <Link to="/myPlaces">
            <NavButton>My Places</NavButton>
          </Link>
          <Link to="/placeAdd">
            <NavButton>Add a Place</NavButton>
          </Link>
          <SearchBar>
            <label>Search:</label>
            <input className="inputNav" />
          </SearchBar>
        </NavbarContainer>
        <Routes />
      </ContentWrapper>
    </Router>
  );
}
