import Swimmer from "../images/swimmer.png";
import Star from "../images/star.png";
import "./Card.css";

const Card = () => (
	<div className="card">
		<img
			src={Swimmer}
			alt="Female professional swimmer"
			className="card-image"
		/>
		<div className="info">
			<img src={Star} alt="Star icon" className="star-icon" />
			<span>5.0</span>
			<span className="gray">(6) • </span>
			<span className="gray">USA </span>
		</div>
		<p>Life Lessons with Katie Zaferes</p>
		<p>
			<span className="bold">From $136</span> / person
		</p>
	</div>
);

export default Card;
