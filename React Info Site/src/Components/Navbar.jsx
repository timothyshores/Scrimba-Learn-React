import Image from "../assets/react-icon-small.png";
import "./Navbar.css";

const Navbar = () => (
	<nav>
		<div className="left">
			<img src={Image} alt="React logo" />
			<h2>React Facts</h2>
		</div>
		<div className="right">
			<h3>React Course - Project 1</h3>
		</div>
	</nav>
);

export default Navbar;
