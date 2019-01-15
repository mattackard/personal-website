import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends Component{

    static proptypes = {
        setBG: Proptypes.func.isRequired,
    }

    componentWillMount() {
        this.props.setBG('temp-bg-large');
    }

    render() {
        return (
            <section>
                <nav id="bigNav" className="subPage">
                    <button><Link to='/web'>Web Dev</Link></button>
                    <button><Link to='/climb'>Climb</Link></button>
                    <button><Link to='/photo'>Photography</Link></button>
                </nav>
            </section>
        );
    }
}

export default Home;