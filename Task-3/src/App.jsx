import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {
  const employees = [
    {
      id: 1,
      name: "Akhil",
      role: "FullStack Developer",
      company: "Tech Solutions",
      experience: "2 Years",
      branch: "Hyderabad",
      location: "Telangana",
      skills: "React, JavaScript, CSS",
    },
    {
      id: 2,
      name: "Priya",
      role: "Backend Developer",
      company: "CodeWorks",
      experience: "3 Years",
      branch: "Bangalore",
      location: "Karnataka",
      skills: "Node.js, MongoDB, Express",
    },
    {
      id: 3,
      name: "Mahathi",
      role: "Full Stack Developer",
      company: "Digital Labs",
      experience: "4 Years",
      branch: "Chennai",
      location: "Tamil Nadu",
      skills: "React, Node.js, SQL",
    },
    {
      id: 4,
      name: "Akhila",
      role: "UI/UX Designer",
      company: "Creative Studio",
      experience: "2.5 Years",
      branch: "Mumbai",
      location: "Maharashtra",
      skills: "Figma, Photoshop, UI Design",
    },
    {
      id: 5,
      name: "Vikram",
      role: "Software Engineer",
      company: "Innovate Tech",
      experience: "5 Years",
      branch: "Delhi",
      location: "Delhi",
      skills: "Java, Spring Boot, MySQL",
    },
    {
      id: 6,
      name: "Ananya",
      role: "React Developer",
      company: "Web Creators",
      experience: "1.5 Years",
      branch: "Pune",
      location: "Maharashtra",
      skills: "React, JavaScript, HTML",
    },
  ];

  return (
    <div className="app">
      <header className="page-header">
        <p className="subtitle">React Task 3</p>
        <h1>Employee Directory</h1>
        <p className="description">
          List Rendering using Array of Objects and map()
        </p>
      </header>

      <main className="employee-container">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </main>
    </div>
  );
}

export default App;