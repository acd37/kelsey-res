import React, {Component, Fragment} from "react";

const styles = {
  h1: {
    fontSize: '5.5rem',
    fontWeight: '300',
    padding: '30px'
  },
  background: {
    padding: "100px 0",
    background: "rgb(14,177,246)",
    background: "-webkit-linear-gradient(to left, rgb(238, 0, 118), rgb(173,40,239), rgb(14,177,246)",
    background: "linear-gradient(-20deg, rgb(238, 0, 118), rgb(173,40,239), rgb(14,177,246))",
    color: '#fff'
  },
  connectIcon: {
    fontSize: "100px",
    color: "#fff"
  },
  separator: {
    borderColor: "#fff"
  }

}

const Connect = () => (

  <Fragment>
    <div style={styles.background}>
      <div className="container">
        <h1 style={styles.h1}>Let's talk</h1>
        <div className="row">
          <div className="col">
            <a style={styles.connectIcon} href="https://twitter.com/kladown23" target="_blank"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="col">
            <a style={styles.connectIcon} href="https://www.linkedin.com/in/kelseydown/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="col">
            <a style={styles.connectIcon} href="mailto:k.louisedown@gmail.com" target="_blank"><i className="far fa-at"></i></a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>

);

export default Connect;
