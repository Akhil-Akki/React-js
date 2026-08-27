import { useState } from "react";
import ThemeContext from "./theme-context";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const contextValue = {
    theme,
    toggleTheme,
    userName: "Akhil",
    course: "React JS",
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;