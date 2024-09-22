import Camera from "./components/Camera.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import OnBoarding from "./components/OnBoarding/OnBoarding.jsx";
import robotImg from "./assets/robotImg.png"; // Ensure this path is correct
import "./App.css";

function App() {
  return (
    <div
      className="h-screen bg-cover bg-center-top"
      style={{ backgroundImage: `url(${robotImg})` }}
    >
      <NavBar />
      <OnBoarding />
      <Camera />
    </div>
  );
}

export default App;
