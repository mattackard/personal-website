//module import
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Transition } from 'react-transition-group';

//style import
import './App.scss';

//component imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Webdev from "./components/Webdev";
import Photography from "./components/Photography";
import Climb from "./components/Climb";
import NotFound from "./components/NotFound";

class App extends Component {

    state = {
        currentBG: "img/temp-bg-large.jpg"
    }

    setBG = (file) => {
        this.setState({
            currentBG: `img/${file}.jpg`
        });
    }

    fadeBG = (imageID) => {
        document.querySelector(".currentBG").fadeOut(800).addClass("hiddenBG");
        document.querySelector(imageID).removeClass("hiddenBG").addClass("currentBG").fadeIn(800);
    }

    changePage = (pageID, pageSRC, displayValue, imageID) => {
        if (document.querySelector(pageID).css("display") === "none") {
            document.querySelector(".subPage").fadeOut(() => {
                document.querySelector(pageID).load(pageSRC, () => {
                    document.querySelector(pageID).css("display", displayValue).hide().fadeIn();
                });
            });
            this.fadeBG(imageID);
        }
    }

    // componentDidMount() {
    //     document.querySelector(".pageLink").click(() => {
    //     if (document.querySelector(this).hasClass("webLink")) {
    //             this.changePage("#webPage","webdev.html","flex","#webPageBG");    
    //     }
    //     else if (document.querySelector(this).hasClass("climbLink")) {
    //             this.changePage("#climbPage","climb.html","flex","#climbPageBG");
    //     }
    //     else if (document.querySelector(this).hasClass("musicLink")) {
    //             this.changePage("#musicPage","music.html","flex","#musicPageBG");
    //     }
    //     else if (document.querySelector(this).hasClass("contactLink")) {
    //             this.changePage("#contactPage","contact.html","flex","#contactPageBG");
    //     }
    //     else if (document.querySelector(this).hasClass("homeLink")) {
    //         if (document.querySelector("#bigNav").css("display") === "none") {
    //             document.querySelector(".subPage").fadeOut(() => {  
    //                 document.querySelector("#bigNav").css("display", "flex").hide().fadeIn();   
    //             });    
    //             this.fadeBG("#mainPageBG");
    //         }
    //         }
    //     });
    // }

    //react-transition config
    duration = 900;

    defaultStyle = {
        transition: `opacity ${this.duration}ms ease-in-out`,
        opacity: 0,
    }

    transitionStyles = {
        entering: { opacity: 0 },
        entered:  { opacity: 1 },
    };

    render() {
        return (
            <BrowserRouter>
                <div id="content">
                    <Header />
                        <Switch>
                            <Route 
                                exact 
                                path="/" 
                                render={(props) => <Home 
                                                        {...props} 
                                                        setBG={this.setBG} />}
                             />
                            <Route 
                                path="/web" 
                                render={(props) => <Transition 
                                                        mountOnEnter 
                                                        timeout={300} 
                                                        unmountOnExit>

                                                        <Webdev 
                                                        {...props} 
                                                        setBG={this.setBG} />

                                                    </Transition>} />
                            <Route 
                                path="/climb" 
                                render={(props) => <Climb 
                                                        {...props} 
                                                        setBG={this.setBG} />} 
                            />
                            <Route 
                                path="/photo" 
                                render={(props) => <Photography 
                                                        {...props} 
                                                        setBG={this.setBG} />} 
                            />
                            <Route 
                                path="/contact" 
                                render={(props) => <Contact 
                                                        {...props} 
                                                        setBG={this.setBG} />} 
                            />
                            <Route 
                                render={(props) => <NotFound 
                                                        {...props} 
                                                        setBG={this.setBG} />} 
                            />
                        </Switch>
                    <Footer />
                    <img className="currentBG" src={this.state.currentBG} alt="page background" />
                </div>    
            </BrowserRouter>
        );
    }
}

export default App;