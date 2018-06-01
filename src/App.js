import React from 'react';
import { Router } from "@reach/router"
import Home from './Home';
import './App.css';

const App = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default App;
