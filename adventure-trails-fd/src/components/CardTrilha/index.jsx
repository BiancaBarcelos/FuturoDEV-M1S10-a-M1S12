function CardTrilha({dadosTrilha}) {
    return (
      <>
        <img src="" alt="" />
        <h1>{dadosTrilha.nomeTrilha}</h1>
        <span>{dadosTrilha.cidade}</span>
        <img src={dadosTrilha.urlImagem} alt="" />
      </>
    )
  }
  
  export default CardTrilha;