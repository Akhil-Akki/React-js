function About() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="badge">About Us</span>

        <h1>We Turn Ideas Into Digital Solutions</h1>

        <p>
          TechNova Solutions is a technology company focused on creating
          modern, reliable and user-friendly digital products.
        </p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <div className="icon"></div>
          <h3>Innovation</h3>
          <p>
            We use modern technologies to build innovative digital solutions.
          </p>
        </div>

        <div className="info-card">
          <div className="icon"></div>
          <h3>Our Mission</h3>
          <p>
            Our mission is to help businesses grow through technology.
          </p>
        </div>

        <div className="info-card">
          <div className="icon"></div>
          <h3>Our Values</h3>
          <p>
            Quality, transparency and customer satisfaction are our priorities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;