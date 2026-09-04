import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import BookingModal from "../components/BookingModal";
import { destinations } from "../data/destinations";

function Home() {
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [bookingDestination, setBookingDestination] = useState(null);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/destinations?search=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay">
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">TRAVEL DIFFERENTLY</span>
              <h1>Leave ordinary.<br /><em>Find somewhere.</em></h1>
              <p>Curated places, memorable stays and simple planning — all in one thoughtful travel space.</p>
            </div>

            <form className="search-box" onSubmit={submitSearch}>
              <div className="search-field"><span>⌕</span><input ref={searchRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Where do you want to go?" aria-label="Search destinations" /></div>
              <button className="search-button" type="submit">Search <span>→</span></button>
            </form>

            <div className="hero-trust"><span>✦ 4.9/5 traveler rating</span><span>•</span><span>100% curated experiences</span></div>
          </div>
        </div>
      </section>

      <section className="section intro-section container">
        <div className="intro-copy"><span className="eyebrow">WHY TRAVELNEST</span><h2>Good trips start with<br /><em>good choices.</em></h2></div>
        <div className="intro-text"><p>Skip the endless tabs. We bring together destinations with character, clear pricing and the details you actually need before you go.</p><Link to="/about" className="text-link">How TravelNest works <span>↗</span></Link></div>
      </section>

      <section className="section destinations-section">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">A FEW GOOD PLACES</span><h2>Popular escapes</h2></div><Link to="/destinations" className="outline-link">See all destinations <span>→</span></Link></div>
          <div className="card-grid">{destinations.slice(0, 3).map((destination) => <DestinationCard key={destination.id} destination={destination} />)}</div>
        </div>
      </section>

      <section className="feature-strip">
        <div className="container feature-grid">
          <div><span>01</span><h3>Curated, not crowded.</h3><p>Places chosen for character, beauty and experiences worth the journey.</p></div>
          <div><span>02</span><h3>Clear from the start.</h3><p>Simple pricing and practical details so planning feels lighter.</p></div>
          <div><span>03</span><h3>Made for real travelers.</h3><p>Local guides, flexible bookings and a calmer way to plan.</p></div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-inner"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Your next good story is<br /><em>somewhere out there.</em></h2></div><Link to="/destinations" className="btn primary large">Start exploring <span>↗</span></Link></div>
      </section>

      {bookingDestination && <BookingModal destination={bookingDestination} onClose={() => setBookingDestination(null)} />}
    </>
  );
}

export default Home;
