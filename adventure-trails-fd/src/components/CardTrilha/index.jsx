import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}) {
  return (
    <div className="cardContainer">
      <img src={dadosTrilha.urlImagem} alt="" />
      <div>
      <h1>{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/ {dadosTrilha.estado}</h1>
      <div className="linha"></div>
      <p>Por: {dadosTrilha.nomeUsuario}</p>
      <p>Duração: {dadosTrilha.duracao} min</p>
      <p>Trajeto: {dadosTrilha.trajeto} Km</p>
      <p>{dadosTrilha.dificuldade}!</p>
      <a href="">Avaliações</a>
      </div>
    </div>
  )
}
  
CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    duracao: PropTypes.number,
    trajeto: PropTypes.number,
    dificuldade: PropTypes.string,
    tipo: PropTypes.oneOf(['caminhada / trekking' ,'ciclismo']),
    nomeUsuario: PropTypes.string,
    urlImagem: PropTypes.string,
  })
}

  export default CardTrilha;