import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <img src={destination.image} alt={destination.name} />

      <div className="destination-card-content">
        <span className="badge">{destination.category}</span>

        <h3>{destination.name}</h3>

        <p>{destination.description}</p>

        <div className="destination-meta">
          <span>📍 {destination.country}</span>
          <span>⭐ {destination.rating}</span>
        </div>

        <Link
          to={`/destinations/${destination.id}`}
          className="primary-button"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

export default DestinationCard;