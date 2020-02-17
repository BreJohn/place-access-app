import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarDiv = styled.div `
background-color: #6200EE;
height: 10vh;
box-sizing: border-box;
color: #ffecdb;
`;

export const Ul = styled.ul `
list-style-type: none;
margin: 0;
padding: 0;
`;

export const Li = styled.li `
color: white;
margin-left: 5vw;
float: left;
margin: 3vh 10vw 0 0;
`;

export const Brand = styled(Li)
`
font-weight: 800;
color: white;
margin-left: 5vw;
`;

export const SearchBar = styled(Li)
`
border-radius: 25%;
float: right;
margin-right: 5vw!important;
min-width: 30vw;
`;

export const Label = styled.label `
color: grey;
margin-right: 1vw;
font-weight: 500;
`;

export const InputNav = styled.input `
border: none;
height: 4vh;
`;

export const NavLink = styled(Link)
`
color: #FFECDB;
text-decoration: none;
`