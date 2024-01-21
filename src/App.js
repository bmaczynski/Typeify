import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Main from "./components/Main";
import "./components/App.css";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
