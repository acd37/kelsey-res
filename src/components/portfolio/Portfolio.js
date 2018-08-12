import React, {Component, Fragment} from "react";
import Card from "./Card";

const styles = {
  h1: {
    fontSize: '5.5rem',
    fontWeight: '400',
    padding: '30px 0',
    color: 'rgb(173,40,239)'
  },
  background: {
    backgroundColor: "#f6f6f6",
    padding: "30px 0",
    minHeight: "600px"
  }
}

const Portfolio = () => (

  <Fragment>
    <div style={styles.background}>
      <h1 style={styles.h1}>Portfolio</h1>

      <div className="container">
        <div className="row">
          <Card title="PopSugar" />
          <Card title="Venture Beat" />
          <Card title="Elite Daily" />
          <Card title="Verily" />
          <Card title="Manta" />
          <Card title="Realtor Mag" />
          <Card title="FairyGodBoss" />
          <Card title="Hello Giggles" />
        </div>
      </div>
    </div>
  </Fragment>

);

export default Portfolio;
