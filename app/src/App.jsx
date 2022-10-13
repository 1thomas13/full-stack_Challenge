import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home"
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);
  
  return (
  <>
    <NavBar />
  
    <Routes>
      
      <Route path="/" element={ <Home/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> }/>
    </Routes>
  </>
  )
}

export default App;
