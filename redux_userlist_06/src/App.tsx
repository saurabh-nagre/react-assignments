import React from "react";

import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to User List Management</h1>

      <nav>
        <Link className="navItem" to="getList">
          Dashboard
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
