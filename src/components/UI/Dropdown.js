import React from 'react';
import './Dropdown.css';
import { NavLink } from '../Navbar/NavBar.styles';
export function Dropdown(props) {
    const { links } = props;
    const [open, setOpen] = React.useState(false);
    const dropdown = React.createRef();
    const caret = React.createRef();

    const toggleDropdown = () => {
        setOpen(!open);
        if(open) {
        dropdown.current.classList.add('open'); 
        caret.current.classList.remove('fa-caret-up');
        caret.current.classList.add('fa-caret-down');       
        return;
        } 
        dropdown.current.classList.remove('open');
        caret.current.classList.remove('fa-caret-down');
        caret.current.classList.add('fa-caret-up');       
    }  
    return (
        <>
            <button className="dropbtn" onClick={toggleDropdown}>Choose Place
            <i className="fa fa-caret-up" ref={caret}></i>
            </button>
            <div className="dropdown-content" id="myDropdown" ref={dropdown}>
                {links.map(
                    (link) => {
                        return <NavLink key={link} to={link}>{link}</NavLink>
                    }
                )}
            </div>
        </>
    )
}