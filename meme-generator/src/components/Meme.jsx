import { useState } from "react";
import results from "../data.js";
import "./Meme.css";

const Meme = () => {
	const [memeImage, setMemeImage] = useState("");

	const handleClick = () => {
		const { memes: memesArray } = results.data;
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		const { url: randomMemeUrl } = memesArray[randomIndex];
		setMemeImage(randomMemeUrl);
	};

	return (
		<main>
			<div className="form">
				<input type="text" placeholder="Top text" className="form--input" />
				<input type="text" placeholder="Bottom text" className="form--input" />
				<button className="form--button" onClick={handleClick}>
					Get a new meme image 🖼
				</button>
				{memeImage && (
					<img
						className="meme-image"
						src={memeImage}
						alt="meme image from meme generator"
					/>
				)}
			</div>
		</main>
	);
};

export default Meme;
