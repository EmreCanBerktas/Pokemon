import React, {useEffect,useState} from "react";
import  PokemonFrontPageInfo  from "./PokemonFrontPageInfo";
import  PokemonBackPageInfo  from "./PokemonBackPageInfo";
import "./App.css"

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=1");

  const getPokemons = async () => {
    const res = await fetch(currentPage);
    const data = await res.json();

    const pokemonData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${data["results"][0]["name"]}`
    );
    const parsedData = await pokemonData.json();
    setPokemon([parsedData]);
    console.log('data:', data)
    setCurrentPage(data.next);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="page">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {pokemon.map((pokemonInfo, index) => (
              <PokemonFrontPageInfo
                key={index}
                id={pokemonInfo.id}
                image={pokemonInfo.sprites.other["official-artwork"].front_default}
                name={pokemonInfo.name}
                type={pokemonInfo.types[0].type.name}
              />
            ))}
          </div>
          <div className="flip-card-back">
            {pokemon.map((pokemonInfo, index) => (
              <PokemonBackPageInfo
                key={index}
                hp={pokemonInfo.stats[0].base_stat}
                attack={pokemonInfo.stats[1].base_stat}
                defense={pokemonInfo.stats[2].base_stat}
                special_attack={pokemonInfo.stats[3].base_stat}
                special_defense={pokemonInfo.stats[4].base_stat}
                speed={pokemonInfo.stats[5].base_stat}
              />
            ))}
          </div>
        </div>
      </div>
      <button className="arrow-right-side" onClick={() => getPokemons()}></button>
    </div>
  );
}

export default App;
