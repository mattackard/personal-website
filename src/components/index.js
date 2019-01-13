import React from 'react';

const Index = () => {
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

export default Index;