import './Card.css';

const listFilmes = [{
    "nome": "Vingadores",
    "duracao": "2H30M",
    "foto": "vingadores.png",
    "ano": 2010,
    "genero": "acao/nerd",
    "descricao": "Filme da Marvel com herois",
    "nota": 5
},
{
    "nome": "Vingadores 2",
    "duracao": "2H30M",
    "foto": "vingadores.png",
    "ano": 2014,
    "genero": "acao/nerd",
    "descricao": "Filme da Marvel com herois",
    "nota": 5 
},
{
    "nome": "Vingadores 3",
    "duracao": "2H30M",
    "foto": "vingadores.png",
    "ano": 2015,
    "genero": "acao/nerd",
    "descricao": "Filme da Marvel com herois",
    "nota": 5
}
]

function Card() {
  return (
    <div className="Card">
        <div className = "container">
            <div className = "row">
                {
                    listFilmes.map((filmes, ind)=> (
                
                <div className = "col-md-4">
                    <div className="card">
                        <img src={'/assets/imagens' + filmes.foto} alt={filmes.nome} className="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{filmes.nome} ({filmes.ano})</h5>
                            <p>Sinopse</p>
                            <p class="card-text">{filmes.descricao}</p>
                            <p>{filmes.duracao}</p>
                            <p>{filmes.genero}</p>
                            <p>{filmes.nota}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            
            ))}
        </div>
    </div>
    </div>
  );
}

export default Card;
