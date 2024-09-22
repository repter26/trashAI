import { useState } from "react";
import "./OnBoarding.css";
import robotImg from "../../assets/robotImg.png"; // Ensure this path is correct
import NavBar from "../NavBar/NavBar";

function OnBoarding() {
  return (
    <div
      className="h-screen bg-cover bg-center-top"
      style={{ backgroundImage: `url(${robotImg})` }}
    >
      <NavBar />
      <div className="flex flex-col justify-center items-end ">
        <h1 className="mt-40 mb-10 mr-20 text-6xl text-white font-bold text-right">
          Intelligent Trash Sorting
        </h1>
        <p className="w-2/5 text-base mr-20 text-white font-bold text-right">
          Our AI-powered trash sorting system is designed to revolutionize waste
          management by automatically detecting and sorting trash.{" "}
        </p>
      </div>
    </div>
  );
}

export default OnBoarding;
