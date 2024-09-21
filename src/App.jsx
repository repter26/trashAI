import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import OnBoarding from "./components/OnBoarding/OnBoarding.jsx"
import robotImg from "./assets/robotImg.png"; // Ensure this path is correct

function App() {
  return (
    <div className= "h-screen bg-cover bg-center-top" style={{ backgroundImage: `url(${robotImg})` }}>
      <NavBar/>
      <OnBoarding/>
    </div>
  )
}

export default App
