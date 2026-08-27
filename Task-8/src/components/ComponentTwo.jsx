import { useContext } from "react";
import ThemeContext from "../context/theme-context";
import ComponentThree from "./ComponentThree";

function ComponentTwo() {
  const { theme, course } = useContext(ThemeContext);

  return (
    <section className={`nested-card ${theme}`}>
      <span className="component-label">COMPONENT 2</span>

      <h2>{course} Training</h2>

      <p>
        Component 2 accesses the course information directly
        using the useContext hook.
      </p>

      <ComponentThree />
    </section>
  );
}

export default ComponentTwo;