import React from 'react';
import './Dropdown.css';
import { NavLink } from '../../Navbar/NavBar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';


export function Dropdown(props) {
    const { links } = props;
    const [open, setOpen] = React.useState(false);
    const [caret, setCaret] = React.useState(faCaretUp);

    const dropdown = React.createRef();

    const toggleDropdown = () => {
        setOpen(!open);
        if(!open) {
        setCaret(faCaretDown);
        dropdown.current.classList.add('open');      
        return;
        } 
        setCaret(faCaretUp);
        dropdown.current.classList.remove('open');      
    }  
    return (
        <>
            <button className="dropbtn" onClick={toggleDropdown}>Choose Place
            <FontAwesomeIcon icon={caret}/>
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