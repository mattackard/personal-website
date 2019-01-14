import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <div id="background">
                <img id="mainPageBG" className="currentBG" src="img/temp-bg-large.jpg" alt="page background" />
                <img id="climbPageBG" className="hiddenBG" src="img/climbBG.jpg" alt="page background" />
                <img id="contactPageBG" className="hiddenBG" src="img/contactBG.jpg" alt="page background" />
                <img id="musicPageBG" className="hiddenBG" src="img/musicBG.jpg" alt="page background" />
                <img id="webPageBG" className="hiddenBG" src="img/webBG.jpg" alt="page background" />
            </div>
            <nav id="bigNav" className="subPage">
                <button className="webLink pageLink"><Link to='/web'>Web Dev</Link></button>
                <button className="climbLink pageLink"><Link to='/climb'>Climb</Link></button>
                <button className="musicLink pageLink"><Link to='/music'>Music</Link></button>
            </nav>
        </section>
    );
}

export default Home;