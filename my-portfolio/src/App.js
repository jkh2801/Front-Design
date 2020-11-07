import './App.css';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project'
import Contact from './components/Contact';

function App() {
  return (
    <div className="page">
      <header><Nav/></header>
      <section id="home"><Home/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skill/></section>
      <section id="project"><Project/></section>
      <section id="contact"><Contact/></section>
    </div>
  );
}

export default App;
