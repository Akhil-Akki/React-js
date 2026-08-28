import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 TechNova Solutions. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Layout;