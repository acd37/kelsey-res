import React, {Component, Fragment} from "react";

const styles = {
  h1: {
    fontSize: '5.5rem',
    fontWeight: '400',
    padding: '30px'
  },
  background: {
    background: "rgb(14,177,246)",
    background: "-webkit-linear-gradient(to left, rgb(238, 0, 118), rgb(173,40,239), rgb(14,177,246)",
    background: "linear-gradient(-20deg, rgb(238, 0, 118), rgb(173,40,239), rgb(14,177,246))",
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
