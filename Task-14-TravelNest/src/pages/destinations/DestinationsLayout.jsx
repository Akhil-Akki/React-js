import { NavLink, Outlet } from "react-router-dom";

function DestinationsLayout() {
  return (
    <section className="container page-section">
      <div className="page-header">
        <span className="eyebrow">DISCOVER THE WORLD</span>
        <h1>Destinations</h1>
        <p>Browse our collection of inspiring places, then open a destination to explore its full itinerary.</p>
      </div>

      <div className="subnav">
        <NavLink end to="/destinations">All destinations</NavLink>
        <NavLink to="/destinations/goa">Featured: Goa</NavLink>
        <NavLink to="/destinations/bali">Featured: Bali</NavLink>
      </div>

      <Outlet />
    </section>
  );
}

export default DestinationsLayout;
