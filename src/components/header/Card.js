import React, {Component, Fragment} from "react";

const styles={

  card: {
    borderRadius: "30px",
    float: "left",
    backgroundColor: "#fff",
    height: "250px",
    width: "300px",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    margin: "30px"
    }
}


class Card extends Component {

  render() {
    return(

      <Fragment>
          <div style={styles.card}></div>
      </Fragment>
    )


  };
}


export default Card;
