import React from "react";
import '../styles/Navbar.css';

export default function Navbar(){
    return(
        <nav className="navbar">
            <a id="navbar-logo">Stivan Stefanov</a>

            <hr id="navbar-hr"></hr>

            <div className="navbar-links-div">
                <a className="navbar-links">About Me</a>
                <a className="navbar-links">Projects</a>
                <a className="navbar-links">Expirience</a>
            </div>

            <button id="navbar-contact-but">Contact Me</button>

        </nav>
    );
}