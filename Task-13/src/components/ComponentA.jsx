import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "../redux/formSlice";

function ComponentA() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(saveFormData(formData));

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      role: "",
    });
  };

  return (
    <section className="component-card">
      <div className="section-heading">
        <span className="section-number">01</span>

        <div>
          <h2>Component A</h2>
          <p>Enter your information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select your role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">
                Full Stack Developer
              </option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Software Tester">Software Tester</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Save to Redux Store
        </button>
      </form>
    </section>
  );
}

export default ComponentA;