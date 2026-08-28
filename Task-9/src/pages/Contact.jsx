function Contact() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="badge">Contact Us</span>

        <h1>Let's Build Something Great</h1>

        <p>
          Have a project idea? Get in touch with our team.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>hello@technova.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;