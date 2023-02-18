import React from "react";
import '../styles/Contact.css';

export default function Contact(){
    return(
        <div className="contact">

            <div className="contact-titles">
                <h1 id="contact-h1">Contact Me</h1>
                <hr id="contact-hr"></hr>
            </div>

            <div className="form-container">

                <div className="form">

                    <label>First name</label>
                    <input id="first-name"></input>

                    <label>Last name</label>
                    <input id="last-name"></input>

                    <label>E-mail</label>
                    <input id="email"></input>

                    <label>Your Message</label>
                    <textarea></textarea>
                    
                </div>

                <div className="contact-img-container"></div>

            </div>

        </div>
    );
}