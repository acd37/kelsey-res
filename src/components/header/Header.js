import React, {Component, Fragment} from "react";
import Card from "./Card";

const styles = {
  svg: {
    fill: '#fff'
  },
  background: {
    backgroundColor: 'rgb(128,11,73)',
    color: '#fff'
  },
  h1: {
    paddingBottom: '150px',
    fontSize: '5.5rem',
    fontWeight: '400'
  },
  h3: {
    paddingTop: '100px'
  },
  holder: {
    display: "inline-block",
    transform: "translateY(-175px)"
  }
}

const Header = () => (

  <Fragment>
    <div style={styles.background}>
      <h3 style={styles.h3}> This is me.</h3>
      <h1 style={styles.h1}> — Kelsey Down. — </h1>
        <svg style={styles.svg} id="curveUp" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 90 0 50 0 100 100 Z"></path>
          <path d="M0 100 C -45 0 200 0 100 100 Z" opacity=".1"></path>
        </svg>
    </div>
    <div style={styles.holder}>
      <Card />
      <Card />
      <Card />
    </div>

  </Fragment>
);

export default Header;
