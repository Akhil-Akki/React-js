import { useContext } from "react";
import ThemeContext from "../context/theme-context";
import ComponentTwo from "./ComponentTwo";

function ComponentOne() {
  const { theme, userName } = useContext(ThemeContext);

  return (
    <section className={`nested-card ${theme}`}>
      <span className="component-label">Component 1</span>

      <h2>Hello, {userName}!</h2>

      <p>
        This component receives data directly from Context without
        using props.
      </p>

      <ComponentTwo />
    </section>
  );
}

export default ComponentOne;