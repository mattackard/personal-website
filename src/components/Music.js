import React from 'react';

const Music = () => {
    return (
        <section id="musicPage">
            <h1>Music</h1>
            <audio controls>
                <source src="audio/Abstract.mp3" type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>
            <div id="abstractAudio" className="songSelect" href="audio/Abstract.mp3">
                <ul>
                    <li>1. Abstract</li>
                    <li>MP3</li>
                    <li>2013</li>
                </ul>
            </div>
            <div id="pianoGuitarAudio" className="songSelect" href="audio/For%20Piano%20and%20Guitar%20v3.mp3">
                <ul>
                    <li>2. For Piano and Guitar</li>
                    <li>MP3</li>
                    <li>2012</li>
                </ul>
            </div>

            <h1>About</h1>
            <p>I first became interested in music after asking for a guitar for Christmas one year. I got a Behringer strat that started my obsession with guitar. I played guitar through middle school and high school, and then went to college for audio recording. As a music major, I was required to take classNamees on music theory, piano, and aural musicianship using voice. I started to lose interest in guitar by the time I finished college, and I bought an electronic drum set. I am still playing the drums, and one of my goals as a musician has always been to create an album with music that I am proud to release. I plan to continue working on this project and put my music along the way on this webpage, along with some of the my older music.</p>
        </section>
    );
}

export default Music;