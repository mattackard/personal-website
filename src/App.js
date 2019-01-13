import React, { Component } from 'react';
import './App.css';

class App extends Component {

  fadeBG = function (imageID) {
    document.querySelector(".currentBG").fadeOut(800).addClass("hiddenBG");
    document.querySelector(imageID).removeClass("hiddenBG").addClass("currentBG").fadeIn(800);
  }

  changePage = function (pageID, pageSRC, displayValue, imageID) {
      if (document.querySelector(pageID).css("display") === "none") {
          document.querySelector(".subPage").fadeOut(function () {
              document.querySelector(pageID).load(pageSRC, function () {
                  document.querySelector(pageID).css("display", displayValue).hide().fadeIn();
              });
          });
          this.fadeBG(imageID);
      }
  }

  componentDidMount() {
    document.querySelector(".pageLink").click(function () {
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
              document.querySelector(".subPage").fadeOut(function () {  
                  document.querySelector("#bigNav").css("display", "flex").hide().fadeIn();   
              });    
              this.fadeBG("#mainPageBG");
          }
        }
    });
  }

  render() {
    return (
      <div>
        <header>
            <h1 id="mainPage" className="homeLink pageLink">Matt Ackard</h1>
            <nav>
                <ul>
                    <li className="webLink pageLink">Web Dev</li>
                    <li className="climbLink pageLink">Climb</li>
                    <li className="musicLink pageLink">Music</li>
                    <li className="contactLink pageLink">Contact</li>
                </ul>
            </nav>
        </header>
        <div id="background">
            <img id="mainPageBG" className="currentBG" src="../public/img/temp-bg-large.jpg" alt="page background" />
            <img id="climbPageBG" className="hiddenBG" src="../public/img/climbBG.jpg" alt="page background" />
            <img id="contactPageBG" className="hiddenBG" src="../public/img/contactBG.jpg" alt="page background" />
            <img id="musicPageBG" className="hiddenBG" src="../public/img/musicBG.jpg" alt="page background" />
            <img id="webPageBG" className="hiddenBG" src="../public/img/webBG.jpg" alt="page background" />
        </div>
        <div id="bigNav" className="subPage">
            <button className="webLink pageLink">Web Dev</button>
            <button className="climbLink pageLink">Climb</button>
            <button className="musicLink pageLink">Music</button>
        </div>
        <div id="webPage" className="subPage">
        
        </div>
        <div id="climbPage" className="subPage">
        
        </div>
        <div id="musicPage" className="subPage">
        
        </div>
        <div id="contactPage" className="subPage">
        
        </div>
        <footer>
            <p>&copy; Matt Ackard 2018</p>
        </footer>
    </div>
    );
  }
}

export default App;