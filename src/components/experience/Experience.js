import React, { Component, Fragment } from "react";
import Row from "./row";
import clearlink from "../../images/clearlink.jpg";
import deseret from "../../images/ddm.png";
import oxford from "../../images/oxford.png";

const styles = {
	h1: {
		fontSize: "5.5rem",
		fontWeight: "300",
		padding: "30px 0",
		color: "rgb(173,40,239)"
	},
	background: {
		padding: "100px 0"
	}
};

const Experience = () => (
	<Fragment>
		<div style={styles.background}>
			<h1 style={styles.h1}>Experience</h1>

			<Row
				img={clearlink}
				title="Digital PR & Outreach Specialist"
				where="Clearlink, Inc"
				location="Salt Lake City, UT"
				description1="Secured brand mentions on Reader’s Digest, HowStuffWorks, HealthyWay & GlassDoor"
				description2="Perform outreach to website owners, bloggers, journalists, contributor networks, major media outlets, and influencers"
				description3="Pitch and place guest content with top-tier publications via networking and relationship building"
				description4="Improve site rankings and increase brand awareness through outreach and digital PR practices"
			/>

			<Row
				img={deseret}
				title="Story Lab Manager"
				where="Deseret Digital Media"
				location="Salt Lake City, UT"
				description1="Increased contributor articles 30% in one quarter"
				description2="Boosted Facebook page likes by 27% using original memes"
				description3="Developed video strategy that garnered 67.2 million hits in 3 months"
				description4="Managed worldwide network of more than 6,000 writers"
			/>

			<Row
				img={oxford}
				title="Oxford University"
				where="Oxford University, England"
				location=""
				description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum, mi vitae feugiat portar"
				description2="Quisque porttitor pretium mauris, a dignissim eros dictum nec. Vivamus commodo semper hendrerit."
				description3="Aenean risus odio, sodales nec commodo quis, lobortis gravida lorem"
				description4="Suspendisse posuere efficitur elit, nec ultrices leo varius eget. Aenean dapibus ultricies pulvinar"
			/>
		</div>
	</Fragment>
);

export default Experience;
