import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import Visit from './components/Visit'
import Dudum from './components/Dudum'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Visit}></Route>
        <Route path="/dudum" component={Dudum}></Route>
      </Router>
    </div>
  );
}

export default App;
