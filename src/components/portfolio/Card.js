import React, { Component, Fragment } from "react";

const styles = {
	card: {
		backgroundColor: "#eee",
		height: "200px",
		width: "200px",
		margin: "3px",
		boxShadow:
			"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"
	},
	h2: {
		color: "#595959",
		fontSize: "1.4rem",
		marginBottom: "30px",
		fontFamily: "Open Sans",
		marginTop: "10px"
	}
};

class Card extends Component {
	render() {
		return (
			<Fragment>
				<div  data-aos-anchor-placement="top-bottom" data-aos-duration="800" data-aos-delay={this.props.delay} data-aos={this.props.animation} style={styles.card}>
					<img src={this.props.image} />
				</div>
			</Fragment>
		);
	}
}

export default Card;
