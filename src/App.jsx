import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Camera from "./components/Camera/Camera.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import OnBoarding from "./components/OnBoarding/OnBoarding.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Define Routes */}
      <Routes>
        {/* Default route */}
        <Route path="/" element={<OnBoarding />} />
        {/* Route for the Camera component */}
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </Router>
  );
}

export default App;
