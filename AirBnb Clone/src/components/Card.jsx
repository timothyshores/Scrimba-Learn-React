import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ title, price, coverImg, stats, location, openSpots }) => {
	const { rating, reviewCount } = stats;
	const imageLocation = `../../public/images/${coverImg}`;
	const badgeShouldDisplay = openSpots === 0 || location === "Online";
	const badgeText = !openSpots
		? "SOLD OUT"
		: location === "Online"
		? "ONLINE"
		: "";

	return (
		<div className="card">
			{badgeShouldDisplay && <div className="card--badge">{badgeText}</div>}
			<img src={imageLocation} className="card-image" />
			<div className="info">
				<img
					src="../../public/images/star.png"
					alt="Star icon"
					className="star-icon"
				/>
				<span>{rating}</span>
				<span className="gray">({reviewCount}) • </span>
				<span className="gray">{location}</span>
			</div>
			<p className="card--title">{title}</p>
			<p className="card--price">
				<span className="bold">From ${price}</span> / person
			</p>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	price: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		rating: PropTypes.number.isRequired,
		reviewCount: PropTypes.number.isRequired,
	}).isRequired,
	location: PropTypes.string.isRequired,
	openSpots: PropTypes.number.isRequired,
};

export default Card;
