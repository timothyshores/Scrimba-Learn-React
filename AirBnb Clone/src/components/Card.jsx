/* eslint-disable no-unused-vars */

import PropTypes from "prop-types";
import "./Card.css";

const Card = ({
	title,
	description,
	price,
	coverImg,
	stats,
	location,
	openSpots,
}) => {
	const { rating, reviewCount } = stats;
	const imageLocation = `../../public/images/${coverImg}`;

	return (
		<div className="card">
			<img
				src={imageLocation}
				className="card-image"
			/>
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
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	price: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		rating: PropTypes.number.isRequired,
		reviewCount: PropTypes.number.isRequired,
	}).isRequired,
	location: PropTypes.string.isRequired,
	openSpots: PropTypes.number,
};

export default Card;
