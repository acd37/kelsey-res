import React, {Component, Fragment} from "react";

const styles={
  image: {
    border: "1px solid #eee",
    borderRadius: "30px",
    maxHeight: "250px",
    maxWidth: "300px",
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
        <div style={styles.card}>
          <img style={styles.image} src="https://via.placeholder.com/300x250" />
        </div>
      </Fragment>
    )


  };
}


export default Card;
