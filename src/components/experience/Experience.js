import React, {Component, Fragment} from "react";

import Row from "./row";

const Experience = () => (

  <Fragment>
    <h1>Experience</h1>

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

  </Fragment>

);

export default Experience;
