import React, { Component } from 'react';
import Proptypes from 'prop-types';

class NotFound extends Component {

    static proptypes = {
        setBG: Proptypes.func.isRequired,
    }

    componentWillMount() {
        this.props.setBG('temp-bg-large');
    }

    render() {
        return (
            <section id="errorPage">
                <h1>404 Page Not Found</h1>
            </section>
        );
    }
}

export default NotFound;