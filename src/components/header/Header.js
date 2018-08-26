import React, { Component, Fragment } from "react";
import Card from "./Card";
import coding from "../../images/coding.png";
import reward from "../../images/reward.png";
import search from "../../images/search-query.png";
import worldwide from "../../images/worldwide.png";

const styles = {
	svg: {
		fill: "#fff"
	},
	background: {
		color: "#fff",
		background: "rgb(14,177,246)",
		background:
			"-webkit-linear-gradient(to left, rgb(238, 0, 118), rgb(173,40,239), rgb(14,177,246)",
		background:
			"linear-gradient(-20deg, rgb(238, 0, 118), rgb(173,40,239), rgb(14,177,246))"
	},
	h1: {
		paddingBottom: "250px",
		paddingTop: "100px",
		fontSize: "7.5rem",
		fontFamily: "Open Sans",
		fontWeight: "200"
	},
	holder: {
		display: "inline-block",
		transform: "translateY(-200px)"
	}
};

const Header = () => (

	<Fragment>
		<div style={styles.background}>
			<h1 style={styles.h1}> — Kelsey Down — </h1>
			<svg
				style={styles.svg}
				id="curveUp"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width="100%"
				height="100"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<path d="M0 100 C 90 0 50 0 100 100 Z" />
				<path d="M0 100 C -45 0 200 0 100 100 Z" opacity=".1" />
			</svg>
		</div>
		<div style={styles.holder}>
			<Card
				animation="fade-up"
				duration="1000"
				delay="100"
				image={search}
				title="Insightful."
				text="I rely on a combination of intuition and measurable data to drive my decision making."
			/>
			<Card
				animation="fade-up"
				duration="1000"
				delay="300"
				image={worldwide}
				title="Tenacious."
				text="I will carve new paths in pursuit of a goal or project I’m passionate about."
			/>
			<Card
				animation="fade-up"
				duration="1000"
				delay="500"
				image={reward}
				title="Collaborative."
				text="I seek out different perspectives to improve my work and solve problems."
			/>
			<Card
				animation="fade-up"
				duration="1000"
				delay="700"
				image={coding}
				title="Dynamic."
				text="I adapt quickly to new challenges and welcome any opportunity to learn."
			/>
		</div>
	</Fragment>
);

export default Header;
