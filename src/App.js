import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./components/App.css";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
