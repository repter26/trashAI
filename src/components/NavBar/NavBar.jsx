import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./NavBar.css";
import trashImg from "../../assets/trashImg.png";

function NavBar() {
  const navigate = useNavigate(); // Initialize the navigation hook

  // Function to handle the AI button click and navigate to the Camera component
  const handleAiClick = () => {
    navigate("/camera"); // Navigate to the /camera route
  };

  return (
    <>
      <div className="flex flex-row h-32 bg-white bg-opacity-50 backdrop-blur-md shadow z-10">
        <a className="flex flex-row" href="/">
          <img className="my-auto ml-12 h-20 w-15" src={trashImg} alt="Logo" />

          <h1 className="my-auto ml-5 text-3xl font-bold">TRASH.AI</h1>
        </a>

        <a className="my-auto ml-auto mr-20 text-xl font-bold hover:text-green-500 transition-colors duration-300">
          About
        </a>

        {/* AI Button triggers navigation */}
        <button
          className="my-auto mr-20 w-12 h-12 bg-black rounded-md text-white font-bold hover:bg-green-500 transition-colors duration-300"
          onClick={handleAiClick} // Navigate to /camera on click
        >
          AI
        </button>
      </div>
    </>
  );
}

export default NavBar;
