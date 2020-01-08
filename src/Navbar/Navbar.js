import React from 'react';
import './Navbar.css';
import styled from 'styled-components';

export function NavBar() {
    const NavButton = styled.div`
	:hover {
		color: white;
        cursor: pointer;
    }
	`;
    return (
        <div className="navBar">
            <ul>
                <li><NavButton className="navItem brand">Accessibility</NavButton></li>
                <li><NavButton className="navItem">All Places</NavButton></li>
                <li><NavButton className="navItem">My Places</NavButton></li>
                <li className="searchBar">  
                    <label>Search:</label>
                    <input className="inputNav"></input>
                </li>
            </ul>

        </div>
    )
}