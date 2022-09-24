import { Container, Typography, CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import { useParams } from "react-router-dom";

import "./style.css";

function DetalhesPage() {
  const [detalhesID, setDetalhesID] = useState([]);
  const [detalhesNome, setDetalhesNome] = useState([]);
  const [detalhesImagem, setDetalhesImagem] = useState([]);
  const [detalhesDistancia, setDetalhesDistancia] = useState([]);
  const [detalhesTempoMedio, setDetalhesTempoMedio] = useState([]);
  const [detalhesValorEntrega, setDetalhesValorEntrega] = useState([]);
  const [detalhesNota, setDetalhesNota] = useState([]);
  const [detalhesDescricao, setDetalhesDescricao] = useState([]);
  const [detalhesEndereco, setDetalhesEndereco] = useState([]);
  const [detalhesCardapio, setDetalhesCardapio] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams()
  
  useEffect(() => {
    getDetalhes(id).then((response) => {
      setDetalhesID(response.detalhesID)
      setDetalhesNome(response.nome);
      setDetalhesImagem(response.imagem);
      setDetalhesDistancia(response.distancia);
      setDetalhesTempoMedio(response.tempo_medio);
      setDetalhesValorEntrega(response.valor_entrega);
      setDetalhesNota(response.nota);
      setDetalhesDescricao(response.descricao);
      setDetalhesEndereco(response.endereco);
      setDetalhesCardapio(response.cardapio);
      setLoading(false);
    })
  }, []);

  return (
	<Container className="detalhes">

    <img className="imgRestaurante"
      src={detalhesImagem}
      alt={detalhesNome}
    />
    <div className="detalhesTextos">
      <Typography className="textTitulo">
        {detalhesNome}
      </Typography>
      <Typography className="textNames">
        {detalhesDistancia} km
      </Typography>
      <Typography className="textNota">
        {detalhesNota}
      </Typography>
      <Typography className="textNames">
        {detalhesTempoMedio} - {detalhesValorEntrega}
      </Typography>
    </div>

    <Typography className="textDescricao">
        {detalhesDescricao}
    </Typography>

    <Typography className="textEndereco">
        {detalhesEndereco}
    </Typography>
  
    {detalhesCardapio.map((cardapio) => (
      <Grid key={cardapio.id}>
        <div className="containerDetalhes">
          <Typography className="textNamesCategoria">{cardapio.categoria}</Typography>
        </div>

        {cardapio.itens.map((itens) => (
          <Grid key={itens.id}>
                <img className="imgComida"
                  src={itens.imagem}
                  alt={itens.nome}
                />
                
              <div className="detalhesComida">
                <Typography className="nomeComida">{itens.nome}</Typography>
                <Typography className="descricaoComida">{itens.descricao}</Typography>
                <Typography className="valorComida">R$ {itens.valor}</Typography>
              </div>
            </Grid>
        ))}
      </Grid>
    ))}
    


	</Container>
);
}

export default DetalhesPage;