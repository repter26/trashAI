import { useState } from 'react'
import './NavBar.css'
import trashImg from "../../assets/trashImg.png"
function NavBar() {


  return (
    <>
      <div className = "flex flex-row h-32 bg-opacity-50 shadow">
        <img className = "my-auto ml-12 h-20 w-15" src = {trashImg}/>
        <h1 className = "my-auto ml-5 text-3xl font-bold "> TRASH.AI</h1>
        
        <a className="my-auto ml-auto mr-20 text-xl font-bold hover:text-green-500 transition-colors duration-300">About</a>
        <button className="my-auto mr-20 w-12 h-12 bg-black rounded-md text-white font-bold  hover:bg-green-500 transition-colors duration-300"> AI</button>
      </div>
      
    </>
  )
}

export default NavBar
