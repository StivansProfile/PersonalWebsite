import React from "react";
import '../styles/Expirience.css';
import spacebarImg from "../assets/spacebar.png";
import charityImg from "../assets/charity.png";
import reclaimImg from "../assets/reclaim.png";
import quizImg from "../assets/quiz.png";

export default function Expirience(){
    return(
        <div className="expirience">
            <div className="expirience-titles">
                <h1 id="exp-h1">My expirience</h1>
                <hr id="exp-hr"></hr>
                <p id="exp-p">
                Here is some interesting work I have done for clients and their organisations,
                while working at a company called "Spacebar".
                </p>
            </div>

            <div className="imgs-container">
                <div className="exp-container">
                    <img src={spacebarImg} width="50%" className="exp-imgs"></img>
                    <p className="exp-p">
                    This is the main website for the company which me and a few
                    other classmates built, while working at "Spacebar".
                    </p>
                </div>
                <div className="exp-container">
                    <img src={charityImg} width="50%" className="exp-imgs"></img>
                    <p className="exp-p">
                    This was one of the first major projects that me and my
                    team built for a client and their organisation. 
                    </p>
                </div>

                <div className="exp-container">
                    <img src={reclaimImg} width="50%" className="exp-imgs"></img>
                    <p className="exp-p">
                    This is the project that I am the most proud of, as the organisation
                    and their idea was really appealing to me, thereofre I was extremely happy 
                    to work on this website.
                    </p>
                </div>

                <div className="exp-container">
                    <img src={quizImg} width="50%" className="exp-imgs"></img>
                    <p className="exp-p">
                    A lot of the features on the Reclaim website were built by me and another classmate, but
                    the one I am the most proud of is the "healthy relationship quiz" since 
                    this was a feature which I designed and built all by myself.
                    </p>
                </div>

            </div>
        </div>
    );
}