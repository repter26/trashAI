import { useState } from 'react';
import './OnBoarding.css';
import robotImg from "../../assets/robotImg.png"; // Ensure this path is correct

function OnBoarding() {
  return (
    <>
      <div 
        className="flex justify-center items-center"
        >
        <h1 className="my-64 ml-auto mr-10   text-6xl text-white font-bold">Intelligent Trash Sorting</h1>
      </div>
    </>
  );
}

export default OnBoarding;
