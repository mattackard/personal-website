import React, { Component } from 'react';

class NotFound extends Component {

    static proptypes = {

    }

    render() {
        return (
            <section id="errorPage">
                <h1>404 Page Not Found</h1>
                <img className="backgroundImage" src="./img/contactBG.jpg" alt="page background" />
            </section>
        );
    }
}

export default NotFound;