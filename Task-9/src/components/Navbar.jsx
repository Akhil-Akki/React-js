import { NavLink } from "react-router-dom";

function Navbar() {
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          TechNova
        </NavLink>

        <nav className="nav-menu">
          <NavLink to="/" className={getNavClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={getNavClass}>
            About
          </NavLink>

          <div className="nav-dropdown">
            <NavLink to="/services" className={getNavClass}>
              Services ▾
            </NavLink>

            <div className="dropdown-menu">
              <NavLink to="/services/web-development">
                Web Development
              </NavLink>

              <NavLink to="/services/app-development">
                App Development
              </NavLink>

              <NavLink to="/services/ui-ux-design">
                UI/UX Design
              </NavLink>
            </div>
          </div>

          <NavLink to="/products" className={getNavClass}>
            Products
          </NavLink>

          <NavLink to="/contact" className={getNavClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;