import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserCard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="status-container">
        <div className="loader"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error-message">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="page-container">
      <section className="hero-section">
        <p className="subtitle">REACT ROUTER DOM</p>

        <h1>User Directory</h1>

        <p className="hero-description">
          Select a user to view their complete profile using dynamic routing
          and the useParams hook.
        </p>
      </section>

      <section className="users-section">
        <div className="section-heading">
          <h2>All Users</h2>
          <span className="user-count">{users.length} Users</span>
        </div>

        <div className="user-grid">
          {users.map((user) => (
            <Link
              to={`/users/${user.id}`}
              className="user-card"
              key={user.id}
            >
              <div className="avatar">
                {user.name.charAt(0)}
              </div>

              <div className="user-card-content">
                <h3>{user.name}</h3>

                <p className="username">@{user.username}</p>

                <p className="user-email">{user.email}</p>

                <div className="view-profile">
                  View Profile
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default UserCard;