import { useState } from 'react';
import './OnBoarding.css';
import robotImg from "../../assets/robotImg.png"; // Ensure this path is correct

function OnBoarding() {
  return (
    <>
      <div 
        className="flex flex-col justify-center items-end "
        >
        <h1 className="mt-40 mb-10 mr-20 text-6xl text-white font-bold text-right">Intelligent Trash Sorting</h1>
        <p className="w-2/5 text-base mr-20 text-white font-bold text-right">Our AI-powered trash sorting system is designed to revolutionize waste management by automatically detecting and sorting trash. Using advanced computer vision and machine learning algorithms, our AI can accurately identify different types of waste—whether it's plastic, paper, metal, or organic materials—and direct them to the appropriate bins. This not only reduces human effort but also ensures better recycling practices, helping to minimize environmental impact. With real-time detection and sorting, our AI system aims to contribute to a cleaner, more sustainable future by making waste management smarter and more efficient.</p>
      </div>
    </>
  );
}

export default OnBoarding;
