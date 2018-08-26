import React, { Component, Fragment } from "react";

const styles = {
	h1: {
		fontSize: "5.5rem",
		fontWeight: "400",
		padding: "30px 0",
		color: "rgb(173,40,239)"
	},
	background: {
		backgroundColor: "#f6f6f6",
		padding: "100px 0"
	},
	p: {
		fontSize: "28px",
		fontFamily: "Open Sans",
		fontWeight: "300"
	}
};

const About = () => (
	<Fragment>
		<div style={styles.background}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						<p style={styles.p}>
							Dynamic marketing professional and digital native with a track
							record of millions of social media hits as well as top-tier
							digital media coverage. 5+ years experience in digital marketing,
							with a little extra oomph in digital PR, social media, content
							strategy, and brand development.
						</p>
					</div>
				</div>
			</div>
		</div>
	</Fragment>
);

export default About;
