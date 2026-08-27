import { useContext } from "react";
import ThemeContext from "./context/theme-context";
import ComponentOne from "./components/ComponentOne";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <div>
          <span className="badge">REACT JS • TASK 8</span>

          <h1>useContext Hook</h1>

          <p>
            Share data between nested components without prop drilling.
          </p>
        </div>

        <button className="theme-button" onClick={toggleTheme}>
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>
      </header>

      <main className="main-content">
        <div className="intro-card">
          <span className="section-tag">CONTEXT DEMONSTRATION</span>

          <h2>Data Sharing with Context</h2>

          <p>
            The Context Provider is created in App and the nested
            components access shared data directly using useContext.
          </p>
        </div>

        <div className="tree-container">
          <div className="tree-title">
            <span>Component Structure</span>
          </div>

          <div className="tree">
            <div>App</div>
            <span>↓</span>
            <div>Component 1</div>
            <span>↓</span>
            <div>Component 2</div>
            <span>↓</span>
            <div>Component 3</div>
          </div>
        </div>

        <ComponentOne />
      </main>

      <footer className="footer">
        <p>
          Built with React • createContext • useContext • useState
        </p>
      </footer>
    </div>
  );
}

export default App;