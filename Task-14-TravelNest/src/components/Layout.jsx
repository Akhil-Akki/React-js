import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

function Layout() {
  const { darkMode, toggleTheme } = useTheme();

  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header className="navbar">
        <NavLink to="/" className="logo">
          TravelNest
        </NavLink>

        <nav className="nav-menu">
          <NavLink to="/" className={getNavClass}>
            Home
          </NavLink>

          <NavLink to="/destinations" className={getNavClass}>
            Destinations
          </NavLink>

          <NavLink to="/bookings" className={getNavClass}>
            Bookings
          </NavLink>

          <NavLink to="/guides" className={getNavClass}>
            Guides
          </NavLink>

          <NavLink to="/about" className={getNavClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={getNavClass}>
            Contact
          </NavLink>

          <button className="theme-button" onClick={toggleTheme}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 TravelNest. Explore more, travel better.</p>
      </footer>
    </div>
  );
}

export default Layout;