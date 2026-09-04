import { NavLink, Outlet } from "react-router-dom";
function DestinationsLayout(){return <section className="container page-section"><div className="page-header"><span className="eyebrow">DISCOVER THE WORLD</span><h1>Places worth the journey.</h1><p>Browse handpicked destinations, compare experiences and open a place to see the details.</p></div><div className="subnav"><NavLink end to="/destinations">All destinations</NavLink><NavLink to="/destinations/goa">Goa</NavLink><NavLink to="/destinations/bali">Bali</NavLink></div><Outlet/></section>}
export default DestinationsLayout;
