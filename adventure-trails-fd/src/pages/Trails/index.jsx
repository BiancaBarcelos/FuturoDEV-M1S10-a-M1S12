import CardTrilha from '../../components/CardTrilha'
import { useContext, useEffect } from 'react'
import {TrilhasContext} from "../../context/TrilhasContext"
import "./style.css"


function Trails() {
    const {trilhas} = useContext(TrilhasContext);

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    
    return(
      <>
        <div className='imagemTrails'>
          <img src="../public/bgTrails.png" alt="" />
        </div>
        <h1 className='tituloTrails'>Explore Trilhas Incríveis</h1>
        {
            trilhas && trilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={trilha.id} id={index}/>
            ))
            
        }
      </>
    )
   }
   export default Trails;