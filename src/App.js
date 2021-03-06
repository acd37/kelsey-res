import React, { Component, Fragment } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import About from './components/about';
import Bullets from "./components/bullets";
import Connect from './components/connect';
import Experience from './components/experience';
import Header from './components/header';
import Portfolio from './components/portfolio'



class App extends Component {

  componentDidMount() {
    AOS.init();
  }


  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Connect />
      </div>
    );
  }
}

export default App;
