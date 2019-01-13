import React from 'react';

const Contact = () => {
    return (
        <div>
            <img id="profilePic" src="img/profile.jpg" />
            <p>mattackard@gmail.com</p>
            <div id="contactIcons">
                <a href="https://github.com/mattackard"><img src="img/git.svg" alt="Github" /></a>
                <a href="https://www.linkedin.com/in/matthew-ackard"><img src="img/linkedin.svg" alt="Linkedin" /></a>
                <a href="https://www.youtube.com/channel/UCXHd62lWJa0SvgGr5eHO2IA"><img src="img/youtube.svg" alt="Youtube" /></a>
                <a href="https://soundcloud.com/matt-ackard"><img src="img/soundcloud.svg" alt="SoundCloud" /></a>
            </div>
        </div>
    );
}

export default Contact;