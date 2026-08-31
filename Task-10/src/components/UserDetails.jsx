import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();

        if (!data.id) {
          throw new Error("User not found");
        }

        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="status-container">
        <div className="loader"></div>
        <p>Loading user details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="details-page">
        <Link to="/users" className="back-button">
          ← Back to Users
        </Link>

        <div className="status-container error-message">
          <h2>User Not Found</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="details-page">
      <Link to="/users" className="back-button">
        ← Back to Users
      </Link>

      <section className="profile-container">
        <div className="profile-header">
          <div className="large-avatar">
            {user.name.charAt(0)}
          </div>

          <div>
            <p className="profile-label">USER PROFILE</p>
            <h1>{user.name}</h1>
            <p className="profile-username">@{user.username}</p>
          </div>
        </div>

        <div className="profile-content">
          <h2>Personal Information</h2>

          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Full Name</span>
              <strong>{user.name}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Username</span>
              <strong>@{user.username}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Email</span>
              <strong>{user.email}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Phone Number</span>
              <strong>{user.phone}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Website</span>
              <strong>{user.website}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">City</span>
              <strong>{user.address.city}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Street</span>
              <strong>{user.address.street}</strong>
            </div>

            <div className="detail-item">
              <span className="detail-label">Company</span>
              <strong>{user.company.name}</strong>
            </div>
          </div>
        </div>

        <div className="company-section">
          <h2>About Company</h2>

          <p>
            <strong>{user.company.name}</strong>
          </p>

          <p>{user.company.catchPhrase}</p>

          <p className="company-business">
            Business: {user.company.bs}
          </p>
        </div>
      </section>
    </main>
  );
}

export default UserDetails;