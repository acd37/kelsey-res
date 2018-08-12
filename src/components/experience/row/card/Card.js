import React, {Component, Fragment} from "react";

const styles={
  image: {
    border: "1px solid #eee",
    borderRadius: "20px",
    height: "250px",
    width: "300px",
    marginRight: "30px"
  },
  card: {
    textAlign: "right"
  }
}


class Card extends Component {

  render() {
    return(

      <Fragment>
        <div data-aos="fade-right" style={styles.card}>
          <img style={styles.image} src={this.props.img} />
        </div>
      </Fragment>
    )


  };
}


export default Card;
