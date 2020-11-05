import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Nav/></Provider>
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Home/></Provider>
  </React.StrictMode>,
  document.getElementById('home')
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><About/></Provider>
  </React.StrictMode>,
  document.getElementById('about')
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Skill/></Provider>
  </React.StrictMode>,
  document.getElementById('skills')
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Contact/></Provider>
  </React.StrictMode>,
  document.getElementById('contact')
);
reportWebVitals();
