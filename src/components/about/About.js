import React, {Component, Fragment} from "react";

const styles = {
  h1: {
    fontSize: '5.5rem',
    fontWeight: '400',
    padding: '30px 0'
  },
  background: {
    backgroundColor: "#f6f6f6"
  }
}

const About = () => (

  <Fragment>
    <div style={styles.background}>
      <h1 style={styles.h1}>About</h1>
    </div>
  </Fragment>

);

export default About;
