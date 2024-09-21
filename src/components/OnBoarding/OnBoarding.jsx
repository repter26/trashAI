import { useState } from 'react';
import './OnBoarding.css';
import robotImg from "../../assets/robotImg.png"; // Ensure this path is correct

function OnBoarding() {
  return (
    <>
      <div 
        className="flex justify-center items-center h-screen bg-cover bg-center-top bg-repeat" 
        style={{ backgroundImage: `url(${robotImg})` }}>
        <h1 className="text-6xl text-white font-bold">Intelligent Trash Sorting</h1>
      </div>
    </>
  );
}

export default OnBoarding;
