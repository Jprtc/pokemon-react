import { Link } from "react-router-dom"

function PokemonCard({nome,caminhoImagem,estagio, evoluirPokemon, id }){
    return (
         <div className='CardPokemon'>
            <Link to={`/pokemon-react/${id}`}>
                <img src={caminhoImagem} width={260} height={280} alt={`Ir para a página do ${nome}`}  loading="lazy"    />
            </Link>
            <h2>{nome}</h2>
            <p>Estágio: {estagio}</p>
            <button aria-label={`Evoluir o Pokemon ${nome}`} onClick={()=> evoluirPokemon(nome)}>Evoluir</button>
          </div>
    )
}
export default PokemonCard

// Componentes react sempre em pascal case
// PascalCase = PrimeiraMaiusculaProximasPalvarasTambem

// camelCase = primeiraMinusculaProximasMaiusculas


