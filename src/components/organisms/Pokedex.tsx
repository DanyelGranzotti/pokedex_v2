import { useState } from "react";
import { getPokemonList } from "../../data/api/pokeapi";
import PokeCard from "./Pokecard";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    getPokemonList().then((response) => {
      setPokemons(response);
    });
  };

  return (
    <div>
      <button onClick={fetchPokemons}>Fetch Pokemons</button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {pokemons?.map((pokemon, index) => (
            <PokeCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
