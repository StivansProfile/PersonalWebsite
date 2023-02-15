import React from "react";
import '../styles/Main.css';
import githubImg from "../assets/github.png";
import linkedInImg from "../assets/linkedin.png";
import instagramImg from "../assets/instagram.png";

export default function Main(){
    return(
        <div className="main">
            <div className="main-titles">
                <h1>Hello there my name is Stivan</h1>
                <h2>I am an aspiring software developer</h2>
            </div>
            <div className="socials">
                <img src={githubImg}></img>
                <img src={linkedInImg}></img>
                <img src={instagramImg}></img>
            </div>
            <button id="main-but">Learn more...</button>
        </div>
        
    );
}