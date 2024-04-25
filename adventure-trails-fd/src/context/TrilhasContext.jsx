import {createContext, useState, useEffect} from 'react'
import useFetch from "../hooks/useFetch"

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({children}) => {
    const [listaTrilhas] = useFetch('/trilhas/trilhas.json');
    const [listaDificuldade] = useFetch('/dificuldades.json');
    const [listaEstados] = useFetch('/estados.json');
    const [listaTipoTrilha] = useFetch('/tipoDeTrilhas.json');
    const [trilhas, setTrilhas] = useState([]);
    const [estadosBrasil, setEstadosBrasil] = useState([]);
    const [dificuldadeTrilha, setDificuldadeTrilha] = useState([]);
    const [categoriaTrilha, setCategoriaTrilha] = useState([]);


    useEffect(() => {
      if (!!listaTrilhas) {
        setTrilhas(listaTrilhas.trilhas)
      }
      if (!!listaEstados) {
        setEstadosBrasil(listaEstados.estados)
      }
      if (!!listaDificuldade) {
        setDificuldadeTrilha(listaDificuldade.dificuldades)
      }
      if (!!listaTipoTrilha) {
        setCategoriaTrilha(listaTipoTrilha.tipoTrilhas)
      }
    }, [listaTrilhas, listaEstados, listaDificuldade, listaTipoTrilha]);

    function addTrilha(dadosTrilha) {
      const addId = trilhas.length + 1;
      const novaTrilha = {...dadosTrilha, id: addId}
      setTrilhas((t) => [...t, novaTrilha]);
     }

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas, addTrilha, estadosBrasil, dificuldadeTrilha, categoriaTrilha}}>
            {children}
        </TrilhasContext.Provider>
    )
    //passar para cá a regra do centralizar tudo aqui, pra chamar uma só, recebe os dados daqui, não repete regra
}