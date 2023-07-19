import React from "react";
import memesData from "../data.js";

export default function Meme() {
	/**
	 * Challenge:
	 * 1. Set up the text inputs to save to
	 *    the `topText` and `bottomText` state variables.
	 * 2. Replace the hard-coded text on the image with
	 *    the text being saved to state.
	 */

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages] = React.useState(memesData);

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	const handleChange = (e) => {
		const { value, name } = e.target;
		setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
	};

	const { topText, bottomText, randomImage } = meme;

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					className="form--input"
					onChange={handleChange}
					name="topText"
					value={topText}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form--input"
					onChange={handleChange}
					name="bottomText"
					value={bottomText}
				/>
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
			</div>
			<div className="meme">
				<img src={randomImage} className="meme--image" />
				<h2 className="meme--text top">{topText}</h2>
				<h2 className="meme--text bottom">{bottomText}</h2>
			</div>
		</main>
	);
}
