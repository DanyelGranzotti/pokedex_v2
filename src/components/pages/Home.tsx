import { useState } from "react";
import { getPokemonList } from "../../data/api/pokeapi";
import TypeButton from "../atoms/TypeButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../atoms/Button";
import Pokedex from "../organisms/Pokedex";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemonList = async () => {
    toast("Success Notification !", {
      icon: "👏",
    });
    try {
      const response = await getPokemonList();
      setPokemonList(response.data.results);
    } catch (error) {
      console.error("Error fetching Pokemon list:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        margin: "1rem",
      }}
    >
      {/* <h1>Home</h1>
      <TypeButton type="fire" text="Fire" />
      <TypeButton type="flying" text="Flying" />
      <TypeButton type="bug" text="Bug" />
      <TypeButton type="dark" text="Dark" />
      <TypeButton type="dragon" text="Dragon" />
      <TypeButton type="electric" text="Electric" />
      <TypeButton type="grass" text="Grass" />
      <TypeButton type="poison" text="Poison" />
      <TypeButton type="water" text="Water" />
      <Button secondary onClick={fetchPokemonList}>
        Fetch Pokemon List
      </Button> */}
      <Pokedex />
    </div>
  );
};

export default Home;
