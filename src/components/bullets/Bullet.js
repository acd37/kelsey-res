import React, {Component, Fragment} from "react";

const styles={

  bullet: {
    borderRadius: "50%",
    float: "left",
    backgroundColor: "#f6f6f6",
    height: "100px",
    width: "100px",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    margin: "30px"
  }
}


class Bullet extends Component {

  render() {
    return(

      <Fragment>
<div style={styles.bullet}></div>
      </Fragment>
    )


  };
}


export default Bullet;
