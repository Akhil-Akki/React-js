import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  website: "",
};

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [editingUserId, setEditingUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // READ - GET
  useEffect(() => {
    let isMounted = true;

    const loadUsers = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }

        const data = await response.json();

        if (isMounted) {
          setUsers(data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    loadUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  // Retry GET request
  const handleRetry = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }

      const data = await response.json();

      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Handle form input
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // CREATE - POST
  const handleAddUser = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      setError("");
      setSuccessMessage("");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add user.");
      }

      const newUser = await response.json();

      setUsers((previousUsers) => {
        const highestId =
          previousUsers.length > 0
            ? Math.max(...previousUsers.map((user) => user.id))
            : 0;

        return [
          ...previousUsers,
          {
            ...newUser,
            id: highestId + 1,
          },
        ];
      });

      setFormData(initialFormData);
      setSuccessMessage("User added successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Start editing
  const handleEditClick = (user) => {
    setEditingUserId(user.id);

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });

    setError("");
    setSuccessMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // UPDATE - PUT
  const handleUpdateUser = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      setError("");
      setSuccessMessage("");

      const response = await fetch(
        API_URL + "/" + editingUserId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: editingUserId,
            ...formData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user.");
      }

      const updatedUser = await response.json();

      setUsers((previousUsers) =>
        previousUsers.map((user) =>
          user.id === editingUserId
            ? {
                ...user,
                ...updatedUser,
                id: editingUserId,
              }
            : user
        )
      );

      setEditingUserId(null);
      setFormData(initialFormData);
      setSuccessMessage("User updated successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // DELETE
  const handleDeleteUser = async (userId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!shouldDelete) {
      return;
    }

    try {
      setError("");
      setSuccessMessage("");

      const response = await fetch(
        API_URL + "/" + userId,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user.");
      }

      setUsers((previousUsers) =>
        previousUsers.filter((user) => user.id !== userId)
      );

      setSuccessMessage("User deleted successfully.");

      if (editingUserId === userId) {
        handleCancelEdit();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingUserId(null);
    setFormData(initialFormData);
    setError("");
    setSuccessMessage("");
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <p className="eyebrow">REACT JS • TASK 12</p>

          <h1>CRUD User Management</h1>

          <p className="header-description">
            Manage users using GET, POST, PUT and DELETE API operations.
          </p>
        </div>
      </header>

      <main className="container">
        {/* Add / Edit Form */}
        <section className="form-card">
          <div className="section-heading">
            <div>
              <p className="section-label">
                {editingUserId ? "UPDATE USER" : "CREATE USER"}
              </p>

              <h2>
                {editingUserId
                  ? "Edit User Details"
                  : "Add New User"}
              </h2>
            </div>

            {editingUserId && (
              <span className="edit-badge">
                Editing ID: {editingUserId}
              </span>
            )}
          </div>

          <form
            onSubmit={
              editingUserId
                ? handleUpdateUser
                : handleAddUser
            }
            className="user-form"
          >
            <div className="input-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Phone</label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="website">Website</label>

              <input
                id="website"
                type="text"
                name="website"
                placeholder="Enter website"
                value={formData.website}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="primary-button"
                disabled={submitting}
              >
                {submitting
                  ? "Processing..."
                  : editingUserId
                    ? "Update User"
                    : "Add User"}
              </button>

              {editingUserId && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </section>

        {/* User Table */}
        <section className="table-card">
          <div className="table-header">
            <div>
              <p className="section-label">READ • GET</p>

              <h2>User Records</h2>
            </div>

            <div className="user-count">
              {users.length}{" "}
              {users.length === 1 ? "User" : "Users"}
            </div>
          </div>

          {loading ? (
            <div className="status-message">
              <div className="loader"></div>
              <p>Loading users...</p>
            </div>
          ) : error && users.length === 0 ? (
            <div className="status-message error-status">
              <p>{error}</p>

              <button
                type="button"
                className="retry-button"
                onClick={handleRetry}
              >
                Try Again
              </button>
            </div>
          ) : users.length === 0 ? (
            <div className="status-message">
              <p>No users found.</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <span className="id-badge">
                          #{user.id}
                        </span>
                      </td>

                      <td className="name-cell">
                        {user.name}
                      </td>

                      <td>{user.email}</td>

                      <td>{user.phone}</td>

                      <td>
                        <a
                          href={
                            "https://" + user.website
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="website-link"
                        >
                          {user.website}
                        </a>
                      </td>

                      <td>
                        <div className="action-buttons">
                          <button
                            type="button"
                            className="edit-button"
                            onClick={() =>
                              handleEditClick(user)
                            }
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="delete-button"
                            onClick={() =>
                              handleDeleteUser(user.id)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      <footer>
        <p>
          Task 12 • CRUD Operations using React API Integration
        </p>
      </footer>
    </div>
  );
}

export default App;
