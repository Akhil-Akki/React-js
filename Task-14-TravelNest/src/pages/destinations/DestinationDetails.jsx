import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { destinations } from "../../data/destinations";
import BookingModal from "../../components/BookingModal";

function DestinationDetails() {
  const { destinationId } = useParams();
  const destination = destinations.find((item) => item.id === destinationId);
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!destination) return <div className="container page-section"><div className="empty-state"><span>🧭</span><h2>Destination not found</h2><Link className="btn primary" to="/destinations">Back to destinations</Link></div></div>;

  return (
    <>
      <section className="details-hero container">
        <Link to="/destinations" className="back-link">← All destinations</Link>
        <div className="details-layout">
          <div className="details-visual"><img className="details-image" src={destination.image} alt={destination.name} /><div className="details-photo-caption"><span>✦ TravelNest pick</span><span>{destination.category}</span></div></div>
          <div className="details-content"><span className="badge">{destination.category}</span><h1>{destination.name}</h1><p className="details-location">{destination.country} · {destination.days} days · ★ {destination.rating}</p><p className="lead">{destination.description}</p><h3>Worth seeing</h3><ul className="highlight-list">{destination.highlights.map((highlight) => <li key={highlight}><span>✓</span>{highlight}</li>)}</ul><div className="details-price"><div><span>From</span><strong>₹{destination.price.toLocaleString("en-IN")}</strong><small>per person</small></div><button className="btn primary" onClick={() => setBookingOpen(true)}>Book this trip <span>↗</span></button></div></div>
        </div>
      </section>
      {bookingOpen && <BookingModal destination={destination} onClose={() => setBookingOpen(false)} />}
    </>
  );
}

export default DestinationDetails;
