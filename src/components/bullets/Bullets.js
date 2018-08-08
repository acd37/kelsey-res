import React, {Component, Fragment} from "react";
import Bullet from "./Bullet";

const styles={
  holder: {
    display: "inline-block",
    transform: "translateY(-100px)"
  }
}


class Bullets extends Component {

  render() {
    return(

      <Fragment>
        <div style={styles.holder}>
          <div className="row">
            <div className="col-lg-12">
              <Bullet />
              <Bullet />
              <Bullet />
              <Bullet />
              <Bullet />
              <Bullet />
              <Bullet />
            </div>
          </div>
        </div>
      </Fragment>
    )


  };
}


export default Bullets;
