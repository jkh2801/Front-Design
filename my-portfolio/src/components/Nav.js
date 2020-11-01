import React from 'react';
import './Nav.scss';




export default function Nav(){
    return(
        <div className="nav">
            <a href="#" className="logo"><span>M</span>y-<span>P</span>ortfoilo</a>
            <ul className="navigation">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skill</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}