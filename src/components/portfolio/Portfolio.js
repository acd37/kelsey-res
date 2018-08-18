import React, { Component, Fragment } from "react";
import Card from "./Card";
import Popsugar from "../../images/popsugar.jpg";
import Venture from "../../images/venturebeat.png";
import Elite from "../../images/elitedaily.jpg";
import Verily from "../../images/verily.png";
import Manta from "../../images/popsugar.jpg";
import Realtor from "../../images/popsugar.jpg";
import FairyGodBoss from "../../images/fgb.png";
import HelloGiggles from "../../images/hello.jpg";

const styles = {
	h1: {
		fontSize: "5.5rem",
		fontWeight: "300",
		padding: "30px 0",
		color: "rgb(173,40,239)"
	},
	background: {
		backgroundColor: "#f6f6f6",
		padding: "30px 0",
		minHeight: "600px"
	}
};

const Portfolio = () => (
	<Fragment>
		<div style={styles.background}>
			<h1 style={styles.h1}>Portfolio</h1>

			<div className="container">
				<div className="row">
					<Card image={Popsugar} />
					<Card image={Venture} />
					<Card image={Elite} />
					<Card image={Verily} />
					<Card title="Manta" />
					<Card image={Realtor} />
					<Card image={FairyGodBoss} />
					<Card image={HelloGiggles} />
				</div>
			</div>
		</div>
	</Fragment>
);

export default Portfolio;
