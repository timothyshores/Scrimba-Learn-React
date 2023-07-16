import results from "../data.js";
import "./Meme.css";

const Meme = () => {
	const handleClick = () => {
		const { memes: memesArray } = results.data;
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		const { url: randomMemeUrl } = memesArray[randomIndex];
		console.log(randomMemeUrl);
	};

	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" className="form--input" />
				<input type="text" placeholder="Bottom text" className="form--input" />
				<button className="form--button" onClick={handleClick}>
					Get a new meme image 🖼
				</button>
			</div>
		</main>
	);
};

export default Meme;
