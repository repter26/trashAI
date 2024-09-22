import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Camera from "./components/Camera/Camera.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import OnBoarding from "./components/OnBoarding/OnBoarding.jsx";
import robotImg from "./assets/robotImg.png"; // Ensure this path is correct
import "./App.css";

function App() {
  return (
    <Router>
      <div
        className="h-screen bg-cover bg-center-top"
        style={{ backgroundImage: `url(${robotImg})` }}
      >
        <NavBar />
        {/* Define Routes */}
        <Routes>
          {/* Default route */}
          <Route path="/" element={<OnBoarding />} />
          {/* Route for the Camera component */}
          <Route path="/camera" element={<Camera />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
