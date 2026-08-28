import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Welcome to TechNova</span>

        <h1>
          Build the Future with
          <span> Modern Technology</span>
        </h1>

        <p>
          We create powerful websites, mobile applications and beautiful
          digital experiences for modern businesses.
        </p>

        <div className="hero-buttons">
          <Link to="/services" className="primary-btn">
            Explore Services
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;