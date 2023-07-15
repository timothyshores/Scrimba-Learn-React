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
			{cardDataArray.map(
				({
					id,
					title,
					description,
					price,
					coverImg,
					stats,
					location,
					openSpots,
				}) => (
					<Card
						key={id}
						title={title}
						description={description}
						price={price}
						coverImg={coverImg}
						stats={stats}
						location={location}
						openSpots={openSpots}
					/>
				)
			)}
		</div>
	</>
);

export default App;
