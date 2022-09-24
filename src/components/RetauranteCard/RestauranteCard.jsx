import "./styles.css";

function RestauranteCard(props) {
  console.log(props.imagem)
  return (
    <div className="card">
      <div className="imagem">
        <img src={props.imagem} alt={props.nome} width={90} height={90} />
      </div>
      <div className="conteudo">
        <span>{props.nome}</span>
        <span>{props.distancia} km</span>
        <span> {props.nota}</span>
        <span>{props.tempoMedio}</span>
      </div>     
    </div>
  );
}

export default RestauranteCard;
