import { useState } from "react";
import results from "../data.js";
import "./Meme.css";

const Meme = () => {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemeImages] = useState(results);

	const handleClick = () => {
		const { memes: memesArray } = allMemeImages.data;
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		const { url: randomMemeUrl } = memesArray[randomIndex];
		setMeme((prevMeme) => ({ ...prevMeme, randomImage: randomMemeUrl }));
	};

	const { randomImage } = meme;

	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" className="form--input" />
				<input type="text" placeholder="Bottom text" className="form--input" />
				<button className="form--button" onClick={handleClick}>
					Get a new meme image 🖼
				</button>
				<img className="meme-image" src={randomImage} />
			</div>
		</main>
	);
};

export default Meme;
