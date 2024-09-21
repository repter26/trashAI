import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import OnBoarding from "./components/OnBoarding/OnBoarding.jsx"

function App() {
  return (
    <>
      <NavBar/>
      <OnBoarding/>
    </>
  )
}

export default App
