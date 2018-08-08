import React, {Component, Fragment} from "react";
import Row from "./row";

const styles = {
  h1: {
    fontSize: '5.5rem',
    fontWeight: '400',
    padding: '30px 0'
  }
}

const Experience = () => (

  <Fragment>
    <h1 style={styles.h1}>Experience</h1>

    <Row
      title="Digital PR & Outreach Specialist"
      where="Clearlink, Inc"
      location="Salt Lake City, UT"
      description="Secured brand mentions on Reader’s Digest, HowStuffWorks, HealthyWay & GlassDoor"
    />

    <Row
      title="Story Lab Manager"
      where="Deseret Digital Media"
      location="Salt Lake City, UT"
      description="Increased contributor articles 30% in one quarter"
    />

  <Row
      title="Oxford University"
      where="Oxford University, England"
      location=""
      description="Summer scholar in creative writing"
    />

  </Fragment>

);

export default Experience;
