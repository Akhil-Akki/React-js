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
        <div className="hero-overlay">
          <div className="container hero-content">
            <span className="eyebrow">YOUR NEXT STORY STARTS HERE</span>
            <h1>Go where your <span>curiosity</span> leads.</h1>
            <p>Discover handpicked destinations, build unforgettable trips and book your next escape with confidence.</p>
            <form className="search-box" onSubmit={submitSearch}>
              <input ref={searchRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Goa, Bali, Paris..." aria-label="Search destinations" />
              <button className="btn primary" type="submit">Explore</button>
            </form>
            <button className="hero-link" onClick={() => searchRef.current?.focus()}>⌕ Search destinations</button>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">POPULAR RIGHT NOW</span>
            <h2>Trips worth taking</h2>
          </div>
          <Link to="/destinations" className="text-link">View all →</Link>
        </div>

        <div className="card-grid">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard key={destination.id} destination={destination} onBook={setBookingDestination} />
          ))}
        </div>
      </section>

      <section className="feature-strip">
        <div className="container feature-grid">
          <div><span>01</span><h3>Curated escapes</h3><p>Handpicked destinations with experiences that make your trip memorable.</p></div>
          <div><span>02</span><h3>Simple booking</h3><p>A clean booking flow with validation and instant confirmation.</p></div>
          <div><span>03</span><h3>Travel support</h3><p>Connect with our guide network for local recommendations.</p></div>
        </div>
      </section>

      {bookingDestination && <BookingModal destination={bookingDestination} onClose={() => setBookingDestination(null)} />}
    </>
  );
}

export default Home;
