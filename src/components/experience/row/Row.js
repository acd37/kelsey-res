import React, {Component, Fragment} from "react";

import Card from "./card";
import Text from "./text";

const styles = {
  row: {
    display: "flex",
    alignItems: "center",
    margin: "30px auto"
  }
}

const Row = props => (

  <Fragment>

    <div className="container">
      <div className="row" style={styles.row}>
        <div className="col">
          <Card img={props.img} />
        </div>
        <div className="col">
          <Text { ...props } />
        </div>
      </div>
    </div>

  </Fragment>

);

export default Row;
