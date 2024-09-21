import { useState, useEffect } from 'react'
import Camera from './components/Camera.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar.jsx'
import OnBoarding from './components/OnBoarding/OnBoarding.jsx'

function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://127.0.0.1:5000/');
  //     const result = await response.text();
  //     setData(result);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []); 
  
  // // Empty array means this runs once when the component mounts
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
    <NavBar/>
    <OnBoarding/>
    </>
  )
}

export default App
