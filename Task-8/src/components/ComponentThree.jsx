import { useContext } from "react";
import ThemeContext from "../context/theme-context";

function ComponentThree() {
  const { theme, userName, course } = useContext(ThemeContext);

  return (
    <section className={`nested-card final-card ${theme}`}>
      <span className="component-label">COMPONENT 3</span>

      <h2>Context Data</h2>

      <div className="data-box">
        <p>
          <strong>Name:</strong> {userName}
        </p>

        <p>
          <strong>Course:</strong> {course}
        </p>

        <p>
          <strong>Theme:</strong>{" "}
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </p>
      </div>

      <p className="success-message">
        Data received successfully using useContext.
      </p>
    </section>
  );
}

export default ComponentThree;