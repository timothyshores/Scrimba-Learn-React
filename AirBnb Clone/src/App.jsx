import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cardDataArray from "./data";

import "./App.css";

const App = () => (
	<>
		<Navbar />
		<Hero />
		<div className="cards-container">
			{cardDataArray.map((cardData) => (
				<Card key={cardData.id} {...cardData} />
			))}
		</div>
	</>
);

export default App;
