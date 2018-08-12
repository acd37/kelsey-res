import React, {Component, Fragment} from "react";

const styles={

  card: {
    padding: "10px",
    float: "left",
    backgroundColor: "#fff",
    height: "250px",
    width: "250px",
    margin: "15px",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
  },
  h2: {
    color: "#595959",
    fontSize: "1.4rem",
    marginBottom: "30px"
  },
  img: {
    marginBottom: "30px",
    marginTop: "30px"
  }
}


class Card extends Component {

  render() {
    return(

      <Fragment>
          <div style={styles.card}>
            <img style={styles.img} src={this.props.image} />
            <h2 style={styles.h2}>{this.props.title}</h2>
          </div>
      </Fragment>
    )


  };
}


export default Card;
