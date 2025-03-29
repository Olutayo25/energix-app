import React from "react";
import logo from "./logo.svg";
import EnergiX from "./EnergiX";
import "./styles.css";  // Ensure global styles are applied
import "./styles.scss"; // SCSS styles

function App() {
  return (
    <div className="App">
      <h1>Welcome to EnergiX</h1>
      <EnergiX />
    </div>
  );
}

export default App;
