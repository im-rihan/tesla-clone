import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Router>
      <div className="app">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </Router>
  );
}

export default App;
