import React, { useState, useCallback } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <h3>If not logged in cant access, Profile & Dashboard</h3>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Profile(props) {
  return <div>{props.condition ? <h2>Profile</h2> : "Can't access without Login"}</div>;
}

function Dashboard(props) {
  return (
    <div>{props.condition ? <h2>Dashboard</h2> : "Can't access without Login"}</div>
  );
}

function App() {
  const [isTextChanged, setIsTextChanged] = useToggle();
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <div className="main">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile condition={isTextChanged} />
            </Route>
            <Route path="/dashboard">
              <Dashboard condition={isTextChanged} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <button onClick={setIsTextChanged}>
            {isTextChanged ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
