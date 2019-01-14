import React from 'react';

const Contact = () => {
    return (
        <section id="contactPage">
            <img id="profilePic" src="img/profile.jpg" alt="Matt Ackard" />
            <p>mattackard@gmail.com</p>
            <ul id="contactIcons">
                <li><a href="https://github.com/mattackard" rel="noopener noreferrer" target="_blank"><img src="img/git.svg" alt="Github" /></a></li>
                <li><a href="https://www.linkedin.com/in/matthew-ackard" rel="noopener noreferrer" target="_blank"><img src="img/linkedin.svg" alt="Linkedin" /></a></li>
                <li><a href="https://www.youtube.com/channel/UCXHd62lWJa0SvgGr5eHO2IA" rel="noopener noreferrer" target="_blank"><img src="img/youtube.svg" alt="Youtube" /></a></li>
                <li><a href="https://soundcloud.com/matt-ackard" rel="noopener noreferrer" target="_blank"><img src="img/soundcloud.svg" alt="SoundCloud" /></a></li>
            </ul>
        </section>
    );
}

export default Contact;