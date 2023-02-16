import React from "react";
import '../styles/Projects.css';
import githubImg from "../assets/github.png";

export default function Projects(){
    return(
        <div className="projects">

            <div className="projects-title">
                <h1 id="projects-h1">Projects</h1>
                <hr id="projects-hr"></hr>
                <p id="projects-p">
                Here are the projects that I am most proud of and the projects
                that I think are worth checking out.   
                </p>
            </div>

            <div className="projects-wrap">
                
                <div className="project-wraps" id="c-sharp-project">
                    <h1 className="project-h1">Dungeouns and dragons character creator</h1>
                    <h2 className="project-h2">Tools used: C#, C# Forms</h2>
                    <img src={githubImg} width="60px" height="60px"
                    style={{cursor:"pointer"}}></img>
                </div>

                <div className="project-wraps">
                    <h1 className="project-h1">Sorting algorithms visualiser</h1>
                    <h2 className="project-h2">Tools used: HTML, CSS, JavaScript</h2>
                    <img src={githubImg} width="60px" height="60px"
                    style={{cursor:"pointer"}}></img>
                </div>

                <div className="project-wraps">
                    <h1 className="project-h1">Bank Statements Analyser</h1>
                    <h2 className="project-h2">Tools used: Python, Pandas, HTML, CSS, JavaScript</h2>
                    <img src={githubImg} width="60px" height="60px"
                    style={{cursor:"pointer"}}></img>
                </div>

                <div className="project-wraps">
                    <h1 className="project-h1">Multiplayer Ludo Game</h1>
                    <h2 className="project-h2">Tools used: Python, PyGame</h2>
                    <img src={githubImg} width="60px" height="60px"
                    style={{cursor:"pointer"}}></img>
                </div>
            </div>

        </div>
    );
}