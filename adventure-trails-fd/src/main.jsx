import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import routers from "./router/Routers"

/* confirmar se o routers está importado corretamente, está funcionando, mas tem que ver se está certo*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routers}>
        
    </RouterProvider>
)
