import { useState } from 'react'
import './NavBar.css'
import trashImg from "../../assets/trashImg.png"
function NavBar() {


  return (
    <>
      <div className = "flex flex-row">
        <img className = "ml-10 mt-5 h-20 w-15 shadow" src = {trashImg}/>
        <h1 className = "mt-10 ml-5 text-3xl font-bold "> TRASH.AI</h1>
      </div>
    </>
  )
}

export default NavBar
