import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async() => {
    const response = await axios.get("http://localhost:8080/api"); //to get the api from the backend
    console.log(response.data);
  }

  useEffect(() =>{
    fetchAPI();
  } ,[]); //ensure that this only takes effect on the first render of the component

  return (
    <>
    <button></button>
    </>
  )
}

export default App
