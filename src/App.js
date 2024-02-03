import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./components/App.css";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-neutral-900">
      <div className="flex flex-col md:max-w-screen-md max-w-screen-sm">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
