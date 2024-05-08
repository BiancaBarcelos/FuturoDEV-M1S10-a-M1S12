import {createBrowserRouter} from 'react-router-dom'

import App from '../App'
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
import Trails from "../pages/Trails"

const routers = createBrowserRouter([
   {
    path: "/",
    element: <App/>,
    errorElement: <div>Página erro - add o componente</div>,
    children: [
        {
            path:"/",
            element: <Home />,
        },
        {
            path:"/cadastro", 
            element: <SignUp />,
        },
        {
            path:"/trilhas", 
            element: <Trails />,
        }    
    ]
   }
])

export default routers;