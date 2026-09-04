import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <Link to={`/destinations/${destination.id}`} className="destination-image-wrap">
        <img src={destination.image} alt={destination.name} />
        <span className="image-badge">{destination.category}</span>
        <span className="image-arrow">↗</span>
      </Link>
      <div className="destination-card-content">
        <div className="destination-meta"><span>📍 {destination.country}</span><span>★ {destination.rating}</span></div>
        <h3><Link to={`/destinations/${destination.id}`}>{destination.name}</Link></h3>
        <p>{destination.description}</p>
        <div className="destination-footer">
          <div><small>From</small><strong>₹{destination.price.toLocaleString("en-IN")}</strong><small>/ person</small></div>
          <Link to={`/destinations/${destination.id}`} className="card-link">Explore <span>→</span></Link>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
