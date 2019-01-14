import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.scss';

//component imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Webdev from "./components/Webdev";
import Music from "./components/Music";
import Climb from "./components/Climb";
import NotFound from "./components/NotFound";

class App extends Component {

    state = {

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

    componentDidMount() {
        document.querySelector(".pageLink").click(() => {
        if (document.querySelector(this).hasClass("webLink")) {
                this.changePage("#webPage","webdev.html","flex","#webPageBG");    
        }
        else if (document.querySelector(this).hasClass("climbLink")) {
                this.changePage("#climbPage","climb.html","flex","#climbPageBG");
        }
        else if (document.querySelector(this).hasClass("musicLink")) {
                this.changePage("#musicPage","music.html","flex","#musicPageBG");
        }
        else if (document.querySelector(this).hasClass("contactLink")) {
                this.changePage("#contactPage","contact.html","flex","#contactPageBG");
        }
        else if (document.querySelector(this).hasClass("homeLink")) {
            if (document.querySelector("#bigNav").css("display") === "none") {
                document.querySelector(".subPage").fadeOut(() => {  
                    document.querySelector("#bigNav").css("display", "flex").hide().fadeIn();   
                });    
                this.fadeBG("#mainPageBG");
            }
            }
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div id="content">
                    <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/web" component={Webdev} />
                            <Route path="/climb" component={Climb} />
                            <Route path="/music" component={Music} />
                            <Route path="/contact" component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    <Footer />
                </div>    
            </BrowserRouter>
        );
    }
}

export default App;