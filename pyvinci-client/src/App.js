import React from 'react';
import './App.css';
import { Home } from './ui/views/Home/Home';
import { Project } from './ui/views/Project/Project';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects/:id" component={Project} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
