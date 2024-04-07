import './App.css'
import CardTrilha from './components/CardTrilha'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Costa da Lagoa",
      cidade:"Florianópolis",
      estado:"SC",
      duracao: 120,
      trajeto: 4,
      dificuldade:"Iniciante",
      tipo:"caminhada / trekking",
      nomeUsuario:"Bianca Barcelos",
      urlImagem:"https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      nomeTrilha: "Costa da Lagoa",
      cidade:"Florianópolis",
      estado:"SC",
      duracao: 120,
      trajeto: 4,
      dificuldade:"Iniciante",
      tipo:"caminhada / trekking",
      nomeUsuario:"Bianca Barcelos",
      urlImagem:"https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <div className='bg'>
      <Menu/>
      <img src="https://images.pexels.com/photos/2132087/pexels-photo-2132087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <h1>Explore Trilhas Incríveis</h1>
      {
        listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index}/>
        ))
      }
      <Footer/>
    </div>
  )
}

export default App;
