import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div id="background">
                <img id="mainPageBG" className="currentBG" src="../public/img/temp-bg-large.jpg" alt="page background" />
                <img id="climbPageBG" className="hiddenBG" src="../public/img/climbBG.jpg" alt="page background" />
                <img id="contactPageBG" className="hiddenBG" src="../public/img/contactBG.jpg" alt="page background" />
                <img id="musicPageBG" className="hiddenBG" src="../public/img/musicBG.jpg" alt="page background" />
                <img id="webPageBG" className="hiddenBG" src="../public/img/webBG.jpg" alt="page background" />
            </div>
            <div id="bigNav" className="subPage">
                <button className="webLink pageLink"><Link to='/web'>Web Dev</Link></button>
                <button className="climbLink pageLink"><Link to='/climb'>Climb</Link></button>
                <button className="musicLink pageLink"><Link to='/music'>Music</Link></button>
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

export default Home;