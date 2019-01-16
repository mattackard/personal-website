import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Climb extends Component {

    static proptypes = {

    }

    render() {
        return (
            <section id="climbPage">
                <h1>Bouldering the Bay Area</h1>
                <p></p>
                <img className="backgroundImage" src="./img/climbBG.jpg" alt="page background" />
            </section>
        );
    }
}

export default Climb;