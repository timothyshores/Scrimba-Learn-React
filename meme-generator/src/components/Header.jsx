import "./Header.css";

const Header = () => (
	<header className="header">
		<img
			src="../../public/troll-face.png"
			className="header--image"
			alt="meme trolling face cartoon"
		/>
		<h2 className="header--title">Meme Generator</h2>
		<h4 className="header--project">React Course - Project 3</h4>
	</header>
);

export default Header;
