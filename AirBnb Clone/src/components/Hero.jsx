import AirBnbExperiences from "../images/photo-grid.png";
import "./Hero.css";

const Hero = () => (
	<div className="hero">
		<div className="hero-container">
			<img src={AirBnbExperiences} alt="Photo grid of AirBnB experiences" />
		</div>
		<h1 className="hero-header text">Online Experiences</h1>
		<p className="hero-description text">
			Join unique interactive activities led by <br /> one-of-a-kind hosts—all
			without leaving <br /> home.
		</p>
	</div>
);

export default Hero;
