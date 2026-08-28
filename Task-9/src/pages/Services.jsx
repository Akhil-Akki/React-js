import { NavLink, Outlet } from "react-router-dom";

function Services() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="badge">Our Services</span>

        <h1>Technology Services</h1>

        <p>
          Choose a service below to learn more about how we can help your
          business.
        </p>
      </div>

      <div className="services-layout">
        <aside className="services-sidebar">
          <h3>Services</h3>

          <NavLink
            to="/services/web-development"
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
             Web Development
          </NavLink>

          <NavLink
            to="/services/app-development"
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
             App Development
          </NavLink>

          <NavLink
            to="/services/ui-ux-design"
            className={({ isActive }) =>
              isActive ? "service-link active" : "service-link"
            }
          >
             UI/UX Design
          </NavLink>
        </aside>

        <div className="nested-content">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Services;