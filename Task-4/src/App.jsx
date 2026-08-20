import { useState } from "react";
import "./App.css";

function App() {
  // Counter State
  const [count, setCount] = useState(0);

  // Theme State
  const [isDark, setIsDark] = useState(false);

  // Sign In State
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Counter Functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Theme Toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Sign In
  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  // Sign Out
  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className={isDark ? "app dark-theme" : "app light-theme"}>
      {/* Header */}
      <header className="header">
        <div>
          <h1>useState Dashboard</h1>
          <p>React State Management Practice</p>
        </div>

        <button className="theme-button" onClick={toggleTheme}>
          {isDark ? "☀️ Light Theme" : "🌙 Dark Theme"}
        </button>
      </header>

      {/* Main Content */}
      <main className="dashboard">

        {/* Counter Card */}
        <section className="card counter-card">
          <div className="card-icon">🔢</div>

          <h2>Counter</h2>

          <p className="description">
            Manage the counter using the useState Hook.
          </p>

          <div className="count-display">
            {count}
          </div>

          <div className="counter-buttons">
            <button className="button increment" onClick={increment}>
              + Increment
            </button>

            <button className="button decrement" onClick={decrement}>
              − Decrement
            </button>

            <button className="button reset" onClick={reset}>
              ↻ Reset
            </button>
          </div>
        </section>

        {/* Theme Card */}
        <section className="card theme-card">
          <div className="card-icon">
            {isDark ? "🌙" : "☀️"}
          </div>

          <h2>Theme Toggle</h2>

          <p className="description">
            Change the application between light and dark themes.
          </p>

          <div className="theme-preview">
            <span className="status-dot"></span>

            <span>
              Current Theme:
              <strong>
                {isDark ? " Dark" : " Light"}
              </strong>
            </span>
          </div>

          <button className="button theme-toggle" onClick={toggleTheme}>
            {isDark ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
          </button>
        </section>

        {/* Authentication Card */}
        <section className="card auth-card">
          <div className="card-icon">
            {isSignedIn ? "🏠" : "🔐"}
          </div>

          {!isSignedIn ? (
            // Sign In UI
            <div className="auth-content">
              <h2>Sign In</h2>

              <p className="description">
                Sign in to access your home dashboard.
              </p>

              <div className="user-icon">
                👤
              </div>

              <h3>Welcome Back!</h3>

              <p>
                Click the button below to sign in.
              </p>

              <button
                className="button sign-in"
                onClick={handleSignIn}
              >
                🔓 Sign In
              </button>
            </div>
          ) : (
            // Home / Sign Out UI
            <div className="auth-content">
              <h2>Welcome Home!</h2>

              <p className="description">
                You have successfully signed in.
              </p>

              <div className="user-icon success">
                🎉
              </div>

              <h3>Hello, User!</h3>

              <p>
                You are currently signed in to your account.
              </p>

              <button
                className="button sign-out"
                onClick={handleSignOut}
              >
                🚪 Sign Out
              </button>
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built with React <span>⚛️</span> using useState Hook
        </p>
      </footer>
    </div>
  );
}

export default App;