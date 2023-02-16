import React from "react";
import '../styles/About.css';
import codingImg from "../assets/coding.png";

export default function About(){
    return(
        <div className="about">
            <div className="about-titles">
                <h1 id="aboutMe-h1">About Me</h1>
                <hr id="aboutMe-hr"></hr>
            </div>

            <div className="aboutMe-content">
                <div className="aboutMePDiv">
                    <p className="aboutMeP">Hi I am Stivan. I'm 19 years old and I mostly do web development.</p>
                    <p className="aboutMeP">I am currently taking a gap year and I will be starting university in September.
                    I love computer science and web development as well as problem solving.
                    </p>
                    <p className="aboutMeP">
                    As mentioned most of the work I do is web-development related and more specifically
                    full-stack development. This is by far the area of programming I love the most.
                    </p>
                </div>
                
                <div>
                    <img src={codingImg} id="codingImg"></img>
                </div>

            </div>

        </div>
    );
}