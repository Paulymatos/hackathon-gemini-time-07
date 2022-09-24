import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import { getRestaurantes } from "../../services/restaurantes.service";
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

  useEffect(() => {
    getDetalhes().then((response) => {
      setDetalhesID(response.detalhesID)
      setDetalhesNome(response.detalhesNome);
      setDetalhesImagem(response.detalhesImagem);
      setDetalhesDistancia(response.detalhesDistancia);
	  setDetalhesTempoMedio(response.detalhesTempoMedio);
	  setDetalhesValorEntrega(response.detalhesValorentrega);
	  setDetalhesNota(response.detalhesNota);
	  setDetalhesDescricao(response.detalhesDescricao);
	  setDetalhesEndereco(response.detalhesEndereco);
      setLoading(false);
    })
  }, []);

  return (
	<Container className="categorias">
		<Typography variant="h5" align="center" color="primary" className="title">
			RESTAURANTES
		</Typography>
		{loading && (
			<div className="loading">
				<CircularProgress color="primary" />
			</div>
		)}
	</Container>
);
}

export default DetalhesPage;