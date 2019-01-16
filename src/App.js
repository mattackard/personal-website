//module import
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

//style import
import './App.scss';

//component imports
import Header from './components/Header';
import Footer from './components/Footer';
import RouteContainer from './components/RouteContainer';

class App extends Component {

    state = {
        currentBG: "img/temp-bg-large.jpg",
        pageLoad: {
            home: false,
            climb: false,
            contact: false,
            photo: false,
            web: false,
            notFound: false
        },
    }

    //sets the background img source in state
    setBG = (file) => {
        this.setState({
            currentBG: `img/${file}.jpg`
        });
    }

    //sets the pageLoad state to trigger CSS transitions
    loadHandler = (pageToLoad, bool) => {

        //ensures that there are never 2 true booleans
        let loadState = {
                    home: false,
                    climb: false,
                    contact: false,
                    photo: false,
                    web: false,
                    notFound: false
                };

        //sets the boolean for the given page
        loadState[pageToLoad] = bool;

        //sets the boolean in state to pass down to the child components
        this.setState({
            pageLoad: loadState
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

    render() {
        return (
            <BrowserRouter>
                <div id="content">
                    <Header />
                    <RouteContainer setBG={this.setBG} />
                    <Footer />
                    <img className="currentBG" src={this.state.currentBG} alt="page background" />
                </div>    
            </BrowserRouter>
        );
    }
}

export default App;