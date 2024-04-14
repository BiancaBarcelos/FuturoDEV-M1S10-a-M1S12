import {createContext, useState, useEffect} from 'react'
import useFetch from "../hooks/useFetch"

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({children}) => {
    const [listaTrilhas] = useFetch('/trilhas/trilhas.json');
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {
      if (!!listaTrilhas) {
        setTrilhas(listaTrilhas.trilhas)
      }
    }, [listaTrilhas]);

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas}}>
            {children}
        </TrilhasContext.Provider>
    )
    //passar para cá a regra do centralizar tudo aqui, pra chamar uma só, recebe os dados daqui, não repete regra
}