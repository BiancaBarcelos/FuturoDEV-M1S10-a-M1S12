import {Outlet} from "react-router-dom"
import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import {TrilhasContextProvider} from "./context/TrilhasContext"

function App() {
  
  return (
    <TrilhasContextProvider>
      <div> 
        <Menu/> 
        <Outlet/>
        <Footer/>
      </div>
    </TrilhasContextProvider>
  )
}

export default App;
