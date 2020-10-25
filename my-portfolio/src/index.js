import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('home')
);
ReactDOM.render(
  <React.StrictMode>
    <About/>
  </React.StrictMode>,
  document.getElementById('about')
);


reportWebVitals();
