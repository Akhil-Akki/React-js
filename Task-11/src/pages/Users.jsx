import { useSearchParams } from "react-router-dom";
import "./Users.css";

const users = [
  {
    id: 1,
    name: "AKHIL",
    email: "akhil08@example.com",
    city: "Hyderabad",
    role: "Python FullStack Developer",
  },
  {
    id: 2,
    name: "Ananya",
    email: "ananya.reddy@example.com",
    city: "Bengaluru",
    role: "UI Designer",
  },
  {
    id: 3,
    name: "Izhaar",
    email: "izhaar2103@example.com",
    city: "Mumbai",
    role: "Backend Developer",
  },
  {
    id: 4,
    name: "Priya",
    email: "priya02@example.com",
    city: "Chennai",
    role: "Project Manager",
  },
  {
    id: 5,
    name: "Hashim",
    email: "hashim17@example.com",
    city: "Delhi",
    role: "Full Stack Developer",
  },
  {
    id: 6,
    name: "Mahathi",
    email: "Mahathi02@example.com",
    city: "Pune",
    role: "QA Engineer",
  },
  {
    id: 7,
    name: "Sravanthi",
    email: "sravanthi08@example.com",
    city: "Ahmedabad",
    role: "DevOps Engineer",
  },
  {
    id: 8,
    name: "Meghana",
    email: "meghana22@example.com",
    city: "Kochi",
    role: "Data Analyst",
  },
  {
    id: 9,
    name: "Raghu",
    email: "raghu07@example.com",
    city: "Jaipur",
    role: "Software Engineer",
  },
  {
    id: 10,
    name: "Akhila",
    email: "akhila17@example.com",
    city: "Indore",
    role: "Product Designer",
  },
  {
    id: 11,
    name: "Manisha",
    email: "manisha03@example.com",
    city: "Hyderabad",
    role: "Mobile Developer",
  },
  {
    id: 12,
    name: "Indujha",
    email: "indu08@example.com",
    city: "Kolkata",
    role: "Business Analyst",
  },
  {
    id: 13,
    name: "Rachana",
    email: "rachana08@example.com",
    city: "Chandigarh",
    role: "Cloud Engineer",
  },
  {
    id: 14,
    name: "Shalini",
    email: "shalini06@example.com",
    city: "Surat",
    role: "HR Manager",
  },
  {
    id: 15,
    name: "Shiva",
    email: "shiva11@example.com",
    city: "Noida",
    role: "Security Engineer",
  },
  {
    id: 16,
    name: "Abhinaya",
    email: "abhinaya13@example.com",
    city: "Thiruvananthapuram",
    role: "Content Strategist",
  },
  {
    id: 17,
    name: "Harshitha",
    email: "harshitha08@example.com",
    city: "Lucknow",
    role: "Database Administrator",
  },
  {
    id: 18,
    name: "Divya",
    email: "divya26@example.com",
    city: "Vadodara",
    role: "UX Researcher",
  },
  {
    id: 19,
    name: "Uday",
    email: "uday07@example.com",
    city: "Mysuru",
    role: "System Administrator",
  },
  {
    id: 20,
    name: "Vaishnavi",
    email: "vaishnavi13@example.com",
    city: "Nagpur",
    role: "Software Tester",
  },
];

const recordsPerPage = 5;

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = Number(searchParams.get("page"));
  const totalPages = Math.ceil(users.length / recordsPerPage);

  const currentPage =
    pageParam >= 1 && pageParam <= totalPages ? pageParam : 1;

  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentUsers = users.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const goToPage = (page) => {
    setSearchParams({ page: page.toString() });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <main className="users-page">
      <section className="users-container">
        <div className="page-header">
          <div>
            <p className="eyebrow">USER DIRECTORY</p>
            <h1>User Management</h1>
            <p className="description">
              Browse users using URL-based pagination with React Router.
            </p>
          </div>

          <div className="page-badge">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        <div className="table-card">
          <div className="table-header">
            <div>
              <h2>Users</h2>
              <p>
                Showing {startIndex + 1}–
                {Math.min(startIndex + recordsPerPage, users.length)} of{" "}
                {users.length} users
              </p>
            </div>

            <div className="url-display">
              ?page={currentPage}
            </div>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Role</th>
                </tr>
              </thead>

              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <span className="user-id">#{user.id}</span>
                    </td>
                    <td>
                      <div className="user-name">
                        <span className="avatar">
                          {user.name.charAt(0)}
                        </span>
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td className="email">{user.email}</td>
                    <td>{user.city}</td>
                    <td>
                      <span className="role-badge">{user.role}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              ← Previous
            </button>

            <div className="page-indicator">
              <span>Page</span>
              <strong>{currentPage}</strong>
              <span>of {totalPages}</span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="concept-card">
          <h3>useSearchParams in action</h3>
          <p>
            The current page is stored in the URL using the{" "}
            <code>page</code> query parameter.
          </p>

          <div className="url-examples">
            <span>/users?page=1</span>
            <span>/users?page=2</span>
            <span>/users?page=3</span>
            <span>/users?page=4</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Users;