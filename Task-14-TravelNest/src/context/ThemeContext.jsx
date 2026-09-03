import { useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext.js";

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("travelnest-theme") === "dark",
  );

  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current;

      localStorage.setItem(
        "travelnest-theme",
        next ? "dark" : "light",
      );

      return next;
    });
  };

  const value = useMemo(
    () => ({
      darkMode,
      toggleTheme,
    }),
    [darkMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}