import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCard from "./components/UserCard";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserCard />} />
        <Route path="/users" element={<UserCard />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;