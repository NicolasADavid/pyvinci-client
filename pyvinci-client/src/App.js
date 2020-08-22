import React from 'react';
import './App.css';
import { Home } from './ui/views/Home/Home';
import { Project } from './ui/views/Project/Project';
import { Register } from './ui/views/Register/Register';
import { Login } from './ui/views/Login/Login';
import Nav from './ui/components/Nav/Nav.js';
import Axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const apiUrl = 'http://localhost:3001';

// Axios.interceptors.request.use(
//   config => {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [apiUrl];
//     const token = localStorage.getItem('token');
//     // if (allowedOrigins.includes(origin)) {
//     //   config.headers.authorization = `Bearer ${token}`;
//     // }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route path="/home" component={Home} />
        <Route path="/projects/:id" component={Project} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
