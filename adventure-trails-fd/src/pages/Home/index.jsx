import "./style.css"
import "./../../index.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"


function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

 return(
   <div>
    <div className="sessao1Home">
        <div className='hero'>
          <img src="../public/bgTrails.png" alt="" />
          <div className="texto1">
            <h1>Que tal aproveitar um tempo com a natureza?</h1>
            <p>Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!</p>
            <Link className="btn1" to="/trilhas">Explorar Trilhas </Link>
          </div>
        </div>
    </div>
    <div className="texto2 container">
      <h2>Explore trilhas incríveis</h2>
      <p>O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.</p>
      <Link className="btn1" to="/trilhas">Explorar Trilhas </Link>    
    </div>
    <div className="texto3 container">
      <div>
        <h2>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h2>
        <Link className="btn1" to="/cadastro">Cadastrar nova Trilha</Link>  
      </div>
      <img src="../public/trilhaHome.png" alt="" />
    </div>
   </div>
 )
}
export default Home;