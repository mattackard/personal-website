import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1><NavLink exact activeClassName="active" to="/">Matt Ackard</NavLink></h1>
            <nav id="mainNav">
                <ul>
                    <li><NavLink activeClassName="active" to="/web">Web Dev</NavLink></li>
                    <li><NavLink activeClassName="active" to="/climb">Climb</NavLink></li>
                    <li><NavLink activeClassName="active" to="/photo">Photography</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
