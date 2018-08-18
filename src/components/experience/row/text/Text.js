import React, {Component, Fragment} from "react";

const styles={
  text:{
    textAlign: "left"
  },
  h2:{
    fontSize: "30px",
    fontFamily: "Open Sans",
    lineHeight: "34px",
    color: "rgb(173,40,239)",
    fontWeight: "300"
  },
  h3:{
    fontSize: "16px",
    lineHeight: "23px",
    color: "rgb(14,177,246)",
    fontWeight: "700"
  },
  h4:{
    fontSize: "16px",
    lineHeight: "21px",
    color: "rgb(80, 85, 92)",
    fontWeight: "700"
  },
  p:{
    marginLeft: "10px",
    fontSize: "14px",
    lineHeight: "14px",
    color: "rgb(80, 85, 92)",
    fontWeight: "400"
  }
}

const Text = props => (

  <Fragment>
    <div data-aos="fade-left" style={styles.text}>
      <h2 style={styles.h2}> {props.title} </h2>
      <h3 style={styles.h3}> {props.where} </h3>
      <h4 style={styles.h4}> {props.location} </h4>
      <p style={styles.p}> {props.description1} </p>
      <p style={styles.p}> {props.description2} </p>
      <p style={styles.p}> {props.description3} </p>
      <p style={styles.p}> {props.description4} </p>
    </div>
  </Fragment>
);

export default Text;
