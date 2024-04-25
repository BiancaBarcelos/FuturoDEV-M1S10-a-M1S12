import * as PropTypes from "prop-types"
import "./style.css"
import {Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});


function CardTrilha({dadosTrilha}) {

  console.log(dadosTrilha)
  return (
    <div className="cardContainer">
      <div className="imagemCard">
        <img src={dadosTrilha.urlImagem} alt="" />
      </div>
      <div className="textoCard">
        <div className="tituloCard">
          <h1>{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade}/ {dadosTrilha.estado}</h1> 
          <StyledRating
            id={`coracao-${dadosTrilha.id}`}
            name={`customized-color-${dadosTrilha.id}`}
            defaultValue={0}
            icon={<FavoriteIcon fontSize="inherit"/>}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
            size="large"
            max={1}
          />
        </div>
        <div className="linha"></div>
        <p className="usuario">Por: {dadosTrilha.nomeUsuario}</p>
        <div className="detalhes">
          <p>Duração: {dadosTrilha.duracao} min</p>
          <p>Trajeto: {dadosTrilha.trajeto} Km</p>
        </div>
        <span className="dificuldade">{dadosTrilha.dificuldade}!</span>
        <div className="avaliacaoTrilha">
          <Rating 
            precision={0.5} 
            size="large"
            id={`estrela-${dadosTrilha.id}`}/>
          <a href="">Avaliações</a>
        </div>
      </div>
    </div>
  )
}
  
CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    id: PropTypes.number.isRequired,
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(['Caminhada / Trekking' ,'Ciclismo']).isRequired,
    nomeUsuario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired,
  })
}

  export default CardTrilha;