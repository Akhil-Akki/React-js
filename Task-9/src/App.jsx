import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Main Routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* Nested Services Routes */}
        <Route path="services" element={<Services />}>
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="ui-ux-design" element={<UIUXDesign />} />
        </Route>

        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="not-found">
              <h1>404</h1>
              <p>Page not found.</p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;