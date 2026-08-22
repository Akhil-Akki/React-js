import { useState } from "react";
import "./App.css";

function App() {
  // Store all form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Store validation errors
  const [errors, setErrors] = useState({});

  // Store success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Clear the error for the field when user starts correcting it
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    // Remove success message when editing
    setSuccessMessage("");
  };

  // Validate all form fields
  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required.";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must contain at least 2 characters.";
    } else if (!/^[A-Za-z ]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name can contain only letters.";
    }

    // Last Name validation
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required.";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must contain at least 2 characters.";
    } else if (!/^[A-Za-z ]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name can contain only letters.";
    }

    // Email validation
    if (formData.email.trim() === "") {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Mobile validation
    if (formData.mobile.trim() === "") {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile =
        "Mobile number must be 10 digits and start with 6, 7, 8, or 9.";
    }

    // Password validation
    if (formData.password === "") {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one number.";
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one special character.";
    }

    // Confirm Password validation
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Date of Birth validation
    if (formData.dob === "") {
      newErrors.dob = "Date of birth is required.";
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();

      const monthDifference =
        today.getMonth() - birthDate.getMonth();

      if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
          today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        newErrors.dob = "You must be at least 18 years old.";
      }

      if (age > 100) {
        newErrors.dob = "Please enter a valid date of birth.";
      }

      if (birthDate > today) {
        newErrors.dob = "Date of birth cannot be in the future.";
      }
    }

    // Gender validation
    if (formData.gender === "") {
      newErrors.gender = "Please select your gender.";
    }

    // Address validation
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required.";
    } else if (formData.address.trim().length < 10) {
      newErrors.address =
        "Address must contain at least 10 characters.";
    }

    // City validation
    if (formData.city.trim() === "") {
      newErrors.city = "City is required.";
    } else if (formData.city.trim().length < 2) {
      newErrors.city = "City name must contain at least 2 characters.";
    }

    // State validation
    if (formData.state.trim() === "") {
      newErrors.state = "State is required.";
    }

    // Pincode validation
    if (formData.pincode.trim() === "") {
      newErrors.pincode = "Pincode is required.";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must contain exactly 6 digits.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      setSuccessMessage(
        "Registration successful! Your form has been submitted."
      );

      console.log("Form Data:", formData);
    } else {
      setSuccessMessage("");
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

    setErrors({});
    setSuccessMessage("");
  };

  return (
    <div className="page-container">
      <div className="form-container">

        {/* Header */}
        <div className="form-header">
          <h1>Registration Form</h1>
          <p>
            Please fill in all the required details carefully.
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="success-message">
            ✓ {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>

          {/* Personal Information */}
          <div className="section-title">
            <h2>Personal Information</h2>
          </div>

          <div className="form-grid">

            {/* First Name */}
            <div className="form-group">
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />

              {errors.firstName && (
                <p className="error-message">
                  ⚠ {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />

              {errors.lastName && (
                <p className="error-message">
                  ⚠ {errors.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <p className="error-message">
                  ⚠ {errors.email}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div className="form-group">
              <label htmlFor="mobile">
                Mobile Number <span>*</span>
              </label>

              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={handleChange}
                maxLength="10"
              />

              {errors.mobile && (
                <p className="error-message">
                  ⚠ {errors.mobile}
                </p>
              )}
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label htmlFor="dob">
                Date of Birth <span>*</span>
              </label>

              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />

              {errors.dob && (
                <p className="error-message">
                  ⚠ {errors.dob}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="form-group">
              <label htmlFor="gender">
                Gender <span>*</span>
              </label>

              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">
                  Prefer not to say
                </option>
              </select>

              {errors.gender && (
                <p className="error-message">
                  ⚠ {errors.gender}
                </p>
              )}
            </div>
          </div>

          {/* Account Information */}
          <div className="section-title">
            <h2>Account Information</h2>
          </div>

          <div className="form-grid">

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                Password <span>*</span>
              </label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
              />

              <small className="field-hint">
                Minimum 8 characters, uppercase, lowercase, number
                and special character.
              </small>

              {errors.password && (
                <p className="error-message">
                  ⚠ {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password <span>*</span>
              </label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {errors.confirmPassword && (
                <p className="error-message">
                  ⚠ {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Address Information */}
          <div className="section-title">
            <h2>Address Information</h2>
          </div>

          <div className="form-grid">

            {/* Address */}
            <div className="form-group full-width">
              <label htmlFor="address">
                Address <span>*</span>
              </label>

              <textarea
                id="address"
                name="address"
                placeholder="Enter your complete address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
              ></textarea>

              {errors.address && (
                <p className="error-message">
                  ⚠ {errors.address}
                </p>
              )}
            </div>

            {/* City */}
            <div className="form-group">
              <label htmlFor="city">
                City <span>*</span>
              </label>

              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />

              {errors.city && (
                <p className="error-message">
                  ⚠ {errors.city}
                </p>
              )}
            </div>

            {/* State */}
            <div className="form-group">
              <label htmlFor="state">
                State <span>*</span>
              </label>

              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleChange}
              />

              {errors.state && (
                <p className="error-message">
                  ⚠ {errors.state}
                </p>
              )}
            </div>

            {/* Pincode */}
            <div className="form-group">
              <label htmlFor="pincode">
                Pincode <span>*</span>
              </label>

              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="6-digit pincode"
                value={formData.pincode}
                onChange={handleChange}
                maxLength="6"
              />

              {errors.pincode && (
                <p className="error-message">
                  ⚠ {errors.pincode}
                </p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="button-container">
            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Reset
            </button>

            <button
              type="submit"
              className="submit-button"
            >
              Submit Registration
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;