import React, { Component, Fragment } from "react";
import Row from "./row";
import clearlink from "../../images/clearlink.jpg";
import deseret from "../../images/ddm.png";
import oxford from "../../images/oxford.png";
import byu from "../../images/byu.png";
import cedar from "../../images/cedar.jpg";
import freelance from "../../images/freelance.jpeg";

const styles = {
	h1: {
		fontSize: "5.5rem",
		fontWeight: "300",
		padding: "30px 0",
		color: "rgb(173,40,239)"
	}
};

const Experience = () => (
	<Fragment>
		<h1 style={styles.h1}>Experience</h1>

		<Row
			img={clearlink}
			title="Digital PR & Outreach Specialist"
			where="Clearlink, Inc"
			when="May 2017 - PRESENT"
			location="Salt Lake City, UT"
			description1="Create and promote digital content for various brands."
			description2="Build links to target pages from high-authority sites."
			description3="Curate highly targeted outreach lists and foster media relationships."
			description4="Secured brand mentions on Reader’s Digest & HowStuffWorks."
		/>

		<Row
			img={freelance}
			title="Writer, Editor & Book Reviewer"
			where="Freelance"
			when="Jun 2014 - PRESENT"
			location="Salt Lake City, UT"
			description1="Collaborate with clients, editors, and authors to evaluate needs."
			description2="Complete developmental and copy edits."
			description3="Read books and write reviews."
			description4="Pitch online editors and write articles for digital publications."
		/>

		<Row
			img={deseret}
			title="Community Manager"
			where="Deseret Digital Media"
			when="Jan 2016 - May 2017"
			location="Salt Lake City, UT"
			description1="Managed worldwide network of more than 6,000 writers."
			description2="Reviewed & edited article submissions, and worked closely with writers to hone skills."
			description3="Produced email newsletter to engage contributors (boosted activity rate 30% in one quarter)."
			description4="Developed video strategy that garnered 67.2 million hits in 3 months. "
		/>

		<Row
			img={byu}
			title="Department Editor"
			where="BYU Women’s Services & Resources"
			when="May 2014 - Oct 2014"
			location="Provo, Utah"
			description1="Launched new editorial position. "
			description2="Designed a style guide for a more cohesive and uniform online brand."
			description3="Edited magazine articles, digital content & other media."
		/>

		<Row
			img={cedar}
			title="Acquisitions Editorial Intern"
			where="Cedar Fort Publishing "
			when="May 2013 - Aug 2013"
			location="Springville, Utah"
			description1="Read and evaluated manuscript submissions."
			description2="Wrote marketing copy and cover blurbs, and completed substantive edits in a timely manner."
		/>

		<Row
			img={oxford}
			title="Certificate of Studies, Creative Writing"
			where="Oxford University"
			when="Jul 2014 - Aug 2014"
			location="Oxford, England"
		/>

		<Row
			img={byu}
			title="Bachelor of Arts, English"
			where="Brigham Young University"
			when="Aug 2010 - Dec 2015"
			location="Provo, Utah"
			description1="Emphasis in Editing"
		/>
	</Fragment>
);

export default Experience;
