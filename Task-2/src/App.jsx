import Child from "./Child";
import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Akhil",
      age: 24,
      city: "Hyderabad",
      mobile: "9876543210",
      email: "akhil08@gmail.com",
      occupation: "Python FullStack Developer",
      address: "Financial District, Hyderabad",
    },

    {
      id: 2,
      name: "Mahathi",
      age: 26,
      city: "Bangalore",
      mobile: "9876543211",
      email: "mahathi@gmail.com",
      occupation: "Software Engineer",
      address: "Whitefield, Bangalore",
    },

    {
      id: 3,
      name: "Priya",
      age: 23,
      city: "Chennai",
      mobile: "9876543212",
      email: "priya@gmail.com",
      occupation: "UI Designer",
      address: "Anna Nagar, Chennai",
    },

    {
      id: 4,
      name: "Arjun",
      age: 28,
      city: "Mumbai",
      mobile: "9876543213",
      email: "arjun@gmail.com",
      occupation: "Backend Developer",
      address: "Andheri, Mumbai",
    },

    {
      id: 5,
      name: "Sneha",
      age: 25,
      city: "Pune",
      mobile: "9876543214",
      email: "sneha@gmail.com",
      occupation: "Data Analyst",
      address: "Kothrud, Pune",
    },
  ];

  return (
    <div className="app">
      <header className="page-header">
        <h1>User Information</h1>
        <p>React Props Implementation</p>
      </header>

      <div className="user-container">
        {users.map((user) => (
          <Child key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;

