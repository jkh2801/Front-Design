import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project'
import Contact from './components/Contact';

function App() {
  let pre = 0;
  let next = 1;
  const heights = []
  useEffect(() => {
    const section = document.querySelectorAll("section")
    section.forEach(function(s) {
      heights.push(s.offsetTop - 200)
    })
  })
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav')
    nav.classList.toggle("sticky", window.scrollY > 0)
    if(window.scrollY >= heights[next]) {
      pre++
      next++
      console.log("??")
    }
    if(window.scrollY <= heights[pre]) {
      pre--
      next--
      console.log("???")
    }
})
  return (
    <div className="page">
      <header><Nav pre = {pre}/></header>
      <section id="home"><Home/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skill/></section>
      <section id="project"><Project/></section>
      <section id="contact"><Contact/></section>
    </div>
  );
}

export default App;
