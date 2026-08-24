import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // State for storing API users
  const [users, setUsers] = useState([]);

  // State for loading status
  const [loading, setLoading] = useState(true);

  // State for API errors
  const [error, setError] = useState("");

  // Fetch users when the component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Check whether the API request was successful
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();

        // Store API data in state
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        // Stop loading after request completes
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <p className="subtitle">React Task 6</p>
          <h1>User Directory</h1>
          <p className="description">
            User information fetched from JSONPlaceholder API using
            <strong> useEffect</strong> and <strong>useState</strong>.
          </p>
        </header>

        <div className="card">
          {/* Loading Message */}
          {loading && (
            <div className="status loading">
              <div className="spinner"></div>
              <p>Loading users...</p>
            </div>
          )}

          {/* Error Message */}
          {!loading && error && (
            <div className="status error">
              <span className="error-icon">!</span>
              <div>
                <h3>Unable to load users</h3>
                <p>{error}</p>
              </div>
            </div>
          )}

          {/* User Table */}
          {!loading && !error && (
            <>
              <div className="table-header">
                <div>
                  <h2>Users</h2>
                  <p>{users.length} users found</p>
                </div>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Website</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user.id}>
                        <td className="user-number">{index + 1}</td>

                        <td>
                          <div className="user-name">
                            <div className="avatar">
                              {user.name.charAt(0)}
                            </div>
                            <span>{user.name}</span>
                          </div>
                        </td>

                        <td>
                          <span className="username">
                            @{user.username}
                          </span>
                        </td>

                        <td>
                          <a
                            href={`mailto:${user.email}`}
                            className="email"
                          >
                            {user.email}
                          </a>
                        </td>

                        <td>{user.phone}</td>

                        <td>
                          <a
                            href={`https://${user.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="website"
                          >
                            {user.website}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        <footer>
          <p>
            Data provided by JSONPlaceholder • Built with React
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;


