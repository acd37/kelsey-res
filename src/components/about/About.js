import React, {Component, Fragment} from "react";

const styles = {
  h1: {
    fontSize: '5.5rem',
    fontWeight: '400',
    padding: '30px 0',
    color: ""
  },
  background: {
    backgroundColor: "#f6f6f6",
    padding: "30px 0"
  },
  p: {
    fontSize: "24px",
    fontFamily: "Roboto Condensed",
    fontWeight: "300"
  }
}

const About = () => (

  <Fragment>
    <div style={styles.background}>
      <h1 style={styles.h1}>About</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p style={styles.p}>
              Highly motivated marketing professional with a track record of capturing millions of social media hits as well as coveted top-tier digital media
              coverage—generating thousands of leads in the form of direct site referrals. I’m a digital native dedicated to re-imagining storytelling. I translate
              hard data and gut instinct into actionable insights with positive results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>

);

export default About;
