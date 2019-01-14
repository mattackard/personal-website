import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 id="mainPage" className="homeLink pageLink"><NavLink exact activeClassName="active" to="/">Matt Ackard</NavLink></h1>
            <nav>
                <ul>
                    <li className="webLink pageLink"><NavLink activeClassName="active" to="/web">Web Dev</NavLink></li>
                    <li className="climbLink pageLink"><NavLink activeClassName="active" to="/climb">Climb</NavLink></li>
                    <li className="musicLink pageLink"><NavLink activeClassName="active" to="/music">Music</NavLink></li>
                    <li className="contactLink pageLink"><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
