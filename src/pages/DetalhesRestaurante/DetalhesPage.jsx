import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import { useParams } from "react-router-dom";
// import { getRestaurantes } from "../../services/restaurantes.service";

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
      setLoading(false);
    })
  }, []);

  return (
	<Container className="detalhes">
    <img
      src={detalhesImagem}
      alt={detalhesNome}
      className="imgRestaurante"
    />
    <Typography variant="h5" align="center" color="primary" className="title">
				RESTAURANTES {detalhesNome}
			</Typography>
	</Container>
);
}

export default DetalhesPage;