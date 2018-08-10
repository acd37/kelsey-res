import React, {Component, Fragment} from "react";

const styles = {
  h1: {
    fontSize: '5.5rem',
    fontWeight: '400',
    padding: '30px'
  },
  background: {
    backgroundColor: 'rgb(128,11,73)',
    color: '#fff'
  }
}

const Connect = () => (

  <Fragment>
    <div style={styles.background}>
      <h1 style={styles.h1}>Connect</h1>
    </div>
  </Fragment>

);

export default Connect;
