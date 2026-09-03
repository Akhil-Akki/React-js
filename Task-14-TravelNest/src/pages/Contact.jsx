import { useReducer, useState } from "react";

const initialState = { name: "", email: "", message: "" };

function reducer(state, action) {
  if (action.type === "field") return { ...state, [action.name]: action.value };
  if (action.type === "reset") return initialState;
  return state;
}

function Contact() {
  const [form, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Message must contain at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitted(true);
    dispatch({ type: "reset" });
  };

  return (
    <section className="container page-section">
      <div className="page-header"><span className="eyebrow">LET'S TALK</span><h1>Contact TravelNest</h1><p>Have a question about a destination or booking? Send us a message.</p></div>

      <div className="contact-layout">
        <div className="contact-info">
          <div><span>📧</span><h3>Email</h3><p>hello@travelnest.example</p></div>
          <div><span>📞</span><h3>Phone</h3><p>+91 90000 12345</p></div>
          <div><span>🕘</span><h3>Hours</h3><p>Mon–Sat · 9:00 AM–6:00 PM</p></div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          {submitted && <div className="success-box">Thanks! Your message has been submitted.</div>}
          <label>Name<input name="name" value={form.name} onChange={(e) => dispatch({ type: "field", name: e.target.name, value: e.target.value })} placeholder="Your name" />{errors.name && <small className="error">{errors.name}</small>}</label>
          <label>Email<input name="email" value={form.email} onChange={(e) => dispatch({ type: "field", name: e.target.name, value: e.target.value })} placeholder="you@example.com" />{errors.email && <small className="error">{errors.email}</small>}</label>
          <label>Message<textarea name="message" rows="6" value={form.message} onChange={(e) => dispatch({ type: "field", name: e.target.name, value: e.target.value })} placeholder="How can we help?" />{errors.message && <small className="error">{errors.message}</small>}</label>
          <button className="btn primary" type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
