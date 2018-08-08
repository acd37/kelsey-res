import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/about';
import Bullets from "./components/bullets";
import Connect from './components/connect';
import Experience from './components/experience';
import Header from './components/header';
import Portfolio from './components/portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bullets />
        <About />
        <Experience />
        <Portfolio />
        <Connect />
      </div>
    );
  }
}

export default App;
