import React, { Component, Fragment } from "react";
import Card from "./Card";
import Popsugar from "../../images/popsugar.jpg";
import Venture from "../../images/venturebeat.png";
import Elite from "../../images/elite.jpg";
import Verily from "../../images/verily.png";
import Realtor from "../../images/realtor.jpg";
import FairyGodBoss from "../../images/fairy.jpg";
import HelloGiggles from "../../images/hello.jpg";
import DigitalHome from "../../images/digitalhome.png";
import HomeLight from "../../images/homelight.jpeg";
import Inscape from "../../images/inscape.jpg";
import KSL from "../../images/ksl.png";
import StormCellar from "../../images/stormcellar.jpg";
import Techspective from "../../images/techspective.jpg";
import ZWave from "../../images/zwave.jpg";
import GirlsLife from "../../images/girlslife.jpg";
import Manta from "../../images/manta.jpg";


const styles = {
	p: {
		fontSize: "28px",
		fontFamily: "Open Sans",
		fontWeight: "300"
	},
	background: {
		backgroundColor: "#f6f6f6",
		padding: "100px 0",
		minHeight: "600px"
	},
	cardHolder: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		margin: "30px 0"
	}
};

const Portfolio = () => (
	<Fragment>
		<div style={styles.background}>
			<p style={styles.p}>Places I've written for...</p>

			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div style={styles.cardHolder}>
							<Card animation="fade-up" image={Popsugar} title="PopSugar"/>
							<Card delay="100" animation="fade-up" image={Venture} title="Venture" background="#eee"/>
							<Card delay="200" animation="fade-up" image={Elite} title="EliteDaily"/>
							<Card delay="300" animation="fade-up" image={Verily} title="Verily"/>
							<Card delay="400" animation="fade-up" image={Manta} title="Manta"/>
							<Card delay="500" animation="fade-up" image={Realtor} title="Realtor"/>
							<Card delay="600" animation="fade-up" image={FairyGodBoss} title="FairGodBoss"/>
							<Card delay="700" animation="fade-up" image={HomeLight} title="Homelight"/>
							<Card delay="800" animation="fade-up" image={KSL} title="KSL.com"/>
							<Card delay="900" animation="fade-up" image={StormCellar} title="Storm Cellar"/>
							<Card delay="1000" animation="fade-up" image={Inscape} title="Inscape"/>
							<Card delay="1100" animation="fade-up" image={Techspective} title="Techspective"/>
							<Card delay="1200" animation="fade-up" image={DigitalHome} title="Digital Home"/>
							<Card delay="1300" animation="fade-up" image={ZWave} title="The ZWave Blog"/>
							<Card delay="1400" animation="fade-up" image={GirlsLife} title="Girls Life"/>

						</div>
					</div>

				</div>
			</div>
		</div>
	</Fragment>
);

export default Portfolio;
