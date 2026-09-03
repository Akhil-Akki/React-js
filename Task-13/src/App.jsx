import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <span className="badge">REACT TASK 13</span>

          <h1>Redux Store Implementation</h1>

          <p>
            Store data in one component and access it from another component
            using Redux Toolkit.
          </p>
        </div>
      </header>

      <main className="main-container">
        <div className="flow-indicator">
          <span>Component A</span>
          <span className="arrow">→</span>
          <span>Redux Store</span>
          <span className="arrow">→</span>
          <span>Component B</span>
        </div>

        <div className="components-container">
          <ComponentA />
          <ComponentB />
        </div>
      </main>

      <footer className="app-footer">
        <p>Redux Toolkit • React Redux • Global State Management</p>
      </footer>
    </div>
  );
}

export default App;