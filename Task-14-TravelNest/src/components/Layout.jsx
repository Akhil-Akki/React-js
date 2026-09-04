import { NavLink, Outlet, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Layout() {
  const { darkMode, toggleTheme } = useTheme();
  const navClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="logo" aria-label="TravelNest home">
            <span className="logo-mark">✦</span>
            <span>Travel<span>Nest</span></span>
          </Link>

          <nav className="nav-menu" aria-label="Main navigation">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/destinations" className={navClass}>Destinations</NavLink>
            <NavLink to="/bookings" className={navClass}>Bookings</NavLink>
            <NavLink to="/guides" className={navClass}>Guides</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          <div className="nav-actions">
            <button className="theme-button" onClick={toggleTheme} aria-label="Toggle color theme">
              {darkMode ? "☀" : "☾"}
            </button>
            <Link to="/destinations" className="nav-cta">Plan a trip <span>↗</span></Link>
          </div>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link to="/" className="logo footer-logo"><span className="logo-mark">✦</span><span>Travel<span>Nest</span></span></Link>
            <p>Thoughtful trips for curious travelers. Discover somewhere worth remembering.</p>
          </div>
          <div><h4>Explore</h4><Link to="/destinations">Destinations</Link><Link to="/guides">Travel guides</Link><Link to="/bookings">My bookings</Link></div>
          <div><h4>Company</h4><Link to="/about">Our story</Link><Link to="/contact">Contact</Link></div>
          <div><h4>Travel notes</h4><p className="footer-note">New places, local stories and useful planning tips — without the noise.</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 TravelNest</span><span>Made for better getaways.</span></div>
      </footer>
    </div>
  );
}

export default Layout;
