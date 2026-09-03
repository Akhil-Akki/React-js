function About() {
  return (
    <section className="container page-section">
      <div className="page-header"><span className="eyebrow">OUR STORY</span><h1>Travel should feel exciting, not complicated.</h1><p>TravelNest is a frontend travel platform built around one idea: make discovering and planning a trip feel effortless.</p></div>
      <div className="about-grid">
        <div className="about-card"><span>✦</span><h3>Curated</h3><p>We showcase destinations with clear pricing, highlights and practical trip information.</p></div>
        <div className="about-card"><span>↗</span><h3>Flexible</h3><p>Bookings can be managed after creation, demonstrating real CRUD interactions in the app.</p></div>
        <div className="about-card"><span>♡</span><h3>Human</h3><p>Our guide section connects travelers with local experts and useful recommendations.</p></div>
      </div>
    </section>
  );
}

export default About;
