import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

class Webdev extends Component {

    static proptypes = {
        setBG: Proptypes.func.isRequired,
    }

    componentWillMount() {
        this.props.setBG('webBG');
    }

    render() {
        return (
            <CSSTransition 
                in={true}
                timeout={10}
                classNames="fade"
                unmountOnExit>
                <section id="webPage">
                    <h1>Web Development</h1>
                    <p>I am a self taught front-end web developer and am looking to start my career off as a junior developer. I have been using the coursework on TeamTreehouse alongside working on projects to learn web development. I plan to continue using these resources and move toward learning the MERN stack to have a more well rounded knowlendge of web development.</p>
                    <p>My biggest project so far has been this website. I am continuing to build this site with some web APIs related to some of my creative hobbies. Navigate to the climbing or music page to see these integrations.</p>
                    <div id="webProjects">
                        <h1>My projects</h1>
                        <ul>
                            <li>
                                <img src="#" alt="portfolio screenshot" />
                                <h2>Franker.xyz</h2>
                                <p>Web apps related to twitch.tv streamers</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </CSSTransition>
        );
    }
}

export default Webdev;