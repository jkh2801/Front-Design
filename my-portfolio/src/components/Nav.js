import React, { useState } from 'react';
import './Nav.scss';


export default function Nav({pre}){
    const content = ["My Portfolio", "About Me", "My Skill", "My Porject", "Contact Me"]
    const [str, setStr] = useState(content[0].split(" "))
    const logo = (s) => {
        return(
            <div className="logo"><span>{s[0].substr(0,1)}</span>{s[0].substr(1)}{" "}<span>{s[1].substr(0,1)}</span>{s[1].substr(1)}</div>
        )
    }
    return(
        <div className="nav">
            {logo(str)}
            <ul className="navigation">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skill</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}