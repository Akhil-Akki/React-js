import { useDispatch, useSelector } from "react-redux";
import { clearFormData } from "../redux/formSlice";

function ComponentB() {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.form.formData);

  const handleClear = () => {
    dispatch(clearFormData());
  };

  return (
    <section className="component-card">
      <div className="section-heading">
        <span className="section-number">02</span>

        <div>
          <h2>Component B</h2>
          <p>Data retrieved from Redux Store</p>
        </div>
      </div>

      {formData ? (
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-avatar">
              {formData.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h3>{formData.name}</h3>
              <p>{formData.role}</p>
            </div>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Full Name</span>
              <strong>{formData.name}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Email</span>
              <strong>{formData.email}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <strong>{formData.phone}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">City</span>
              <strong>{formData.city}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Role</span>
              <strong>{formData.role}</strong>
            </div>
          </div>

          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
          >
            Clear Redux Data
          </button>
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3>No Data Available</h3>
          <p>
            Submit the form in Component A to store data in the Redux Store.
          </p>
        </div>
      )}
    </section>
  );
}

export default ComponentB;