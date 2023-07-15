import AirBnbLogo from "../images/airbnb-logo.png";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<img src={AirBnbLogo} alt="AirBnb Logo" />
		</nav>
	);
};

export default Navbar;
