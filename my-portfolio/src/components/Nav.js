import React, { useState } from 'react';
import './Nav.scss';


export default function Nav(){
    const content = ["My Portfolio", "About Me", "My Skill", "My Porject", "Contact Me"]
    const section = document.querySelectorAll("section")
    const heights = []
    section.forEach(function(s) {
        heights.push(s.offsetTop - 200)
    })
    console.log(section)
    let pre = 0
    let next = 1
    let str = content[pre].split(" ")
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav')
        nav.classList.toggle("sticky", window.scrollY > 0)
        if(window.scrollY >= heights[next]) {
            next++;
            str = content[++pre].split(" ")
            console.log(str)
        }
        if(window.scrollY <= heights[pre]) {
            next--;
            str = content[--pre].split(" ")
            console.log(str)
        }
    })
    const logo = (s) => {
        console.log("??")
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