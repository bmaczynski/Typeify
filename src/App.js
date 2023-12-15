import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Main from "./components/Main";
import "./components/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
