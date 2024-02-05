import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./components/App.css";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="w-full flex flex-col items-center h-screen overflow-hidden md:min-h-screen bg-neutral-900">
      <div className="flex flex-col w-full p-10 md:p-5 md:max-w-screen-md">
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
