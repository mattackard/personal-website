import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends Component{

    static proptypes = {

    }

    render() {
        return (
            <section>
                <nav id="bigNav" className="subPage">
                    <button><Link to='/web'>Web Dev</Link></button>
                    <button><Link to='/climb'>Climb</Link></button>
                    <button><Link to='/photo'>Photography</Link></button>
                </nav>
                <img className="backgroundImage" src="./img/temp-bg-large.jpg" alt="page background" />
            </section>
        );
    }
}

export default Home;