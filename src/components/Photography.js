import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Photography extends Component{

    static proptypes = {
        setBG: Proptypes.func.isRequired,
    }

    componentWillMount() {
        this.props.setBG('photoBG');
    }

    render() {
        return (
            <section id="photoPage">
                <h1>Hello World from Photography Page!</h1>
            </section>
        );
    }
}

export default Photography;