import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Trails from "./pages/Trails"
import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { element } from "prop-types";

function App() {
  
  return (
    <div className='bg'>
      
      <Menu/> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cadastro" element={<SignUp />}></Route>
        <Route path="trilhas" element={<Trails />}></Route>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App;
