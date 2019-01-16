import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Photography extends Component{

    static proptypes = {

    }

    render() {
        return (
            <section id="photoPage">
                <h1>Hello World from Photography Page!</h1>
                <img className="backgroundImage" src="./img/photoBG.jpg" alt="page background" />
            </section>
        );
    }
}

export default Photography;