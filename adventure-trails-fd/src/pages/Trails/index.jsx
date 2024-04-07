import CardTrilha from '../../components/CardTrilha'
import useFetch from "../../hooks/useFetch"

function Trails() {
    const [listaTrilhas] = useFetch('/trilhas/trilhas.json');
    return(
        <>
        <img src="https://images.pexels.com/photos/2132087/pexels-photo-2132087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Explore Trilhas Incríveis</h1>
        {
            listaTrilhas && listaTrilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index}/>
            ))
        }
      </>
    )
   }
   export default Trails;