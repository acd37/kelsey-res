import React, {Component, Fragment} from "react";

const styles={

  card: {
    padding: "20px",
    borderRadius: "0px",
    float: "left",
    backgroundColor: "#fff",
    height: "350px",
    width: "250px",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    margin: "20px",
  },
  h2: {
    color: "#595959",
    fontSize: "1.4rem",
    marginBottom: "30px"
  },
  p: {
    fontSize: "1.0rem",
    color: "#595959"
  },
  img: {
    marginBottom: "30px",
    marginTop: "30px",
  }
}


class Card extends Component {

  render() {
    return(

      <Fragment>
          <div data-aos-duration={this.props.duration} data-aos={this.props.animation} data-aos-delay={this.props.delay} style={styles.card}>
            <img style={styles.img} src={this.props.image} />
            <h2 style={styles.h2}>{this.props.title}</h2>
            <p style={styles.p}>{this.props.text}</p>
          </div>
      </Fragment>
    )


  };
}


export default Card;
