import React, {Component, Fragment} from "react";
import Card from "./Card";
import coding from "../../images/coding.png";
import reward from "../../images/reward.png";
import search from "../../images/search-query.png";
import worldwide from "../../images/worldwide.png";

const styles = {
  svg: {
    fill: '#fff'
  },
  background: {
    color: '#fff',
    background: "rgb(14,177,246)",
    background: "-webkit-linear-gradient(to left, rgb(238, 0, 118), rgb(173,40,239), rgb(14,177,246)",
    background: "linear-gradient(-20deg, rgb(238, 0, 118), rgb(173,40,239), rgb(14,177,246))"

  },
  h1: {
    paddingBottom: '250px',
    fontSize: '7.5rem',
    fontFamily: 'Dosis',
    fontWeight: '200'
  },
  h3: {
    fontFamily: 'Dosis',
    paddingTop: '100px'
  },
  holder: {
    display: "inline-block",
    transform: "translateY(-200px)"
  }
}

const Header = () => (

  <Fragment>
    <div style={styles.background}>
      <h3 style={styles.h3}> This is me.</h3>
      <h1 style={styles.h1}> — Kelsey Down — </h1>
        <svg style={styles.svg} id="curveUp" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 90 0 50 0 100 100 Z"></path>
          <path d="M0 100 C -45 0 200 0 100 100 Z" opacity=".1"></path>
        </svg>
    </div>
    <div style={styles.holder}>
      <Card image={search} title="Content." text="I have an established track record of content creation that has reached millions of individuals globally."/>
      <Card image={worldwide} title="Outreach." text="I have created and promoted digital content for a variety of big-name brands."/>
      <Card image={reward} title="Self-motivated." text="I am intrinsically motivated by the work I do for the awesome companies I have worked with."/>
      <Card image={coding} title="Marketing." text="I am versed in both traditional marketing methods as well as contemporary digital marketing strategies."/>
    </div>

  </Fragment>
);

export default Header;
