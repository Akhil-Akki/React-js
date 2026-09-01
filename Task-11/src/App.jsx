import { Navigate, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users?page=1" replace />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<Navigate to="/users?page=1" replace />} />
    </Routes>
  );
}

export default App;