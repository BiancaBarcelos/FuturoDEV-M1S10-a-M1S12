import './App.css'
import CardTrilha from './components/CardTrilha/index.jsx'

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Costa da Lagoa",
      cidade:"Florianópolis",
      estado:"SC",
      duracao:"120",
      dificuldade:"Fácil",
      tipo:"",
      nomeUsuario:"",
      urlImagem:"https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <>
      {
        listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index}/>
        ))
      }
    </>
  )
}

export default App;
