import { useEffect, useState } from "react";
import TypeButton from "../atoms/TypeButton";
import { getPokemonDetail } from "../../data/api/pokeapi";
import { styled } from "styled-components";
import { colorMap } from "../../utils/helpers";

const StylePokeCard = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 384px;
  height: 382px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 1rem;
  background: ${(props: any) => props.cardColor + "26"};
  border: 1px solid #24293f;
  border-radius: 24px;
  overflow: hidden;

  .card__elipse {
    background: #1cd80e;
    filter: blur(100px);
    border-radius: 50%;
    z-index: -1;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: relative;
    z-index: 10;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .card__image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const PokeCard = ({ pokemon }: any) => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [cardColor, setCardColor] = useState<any>("");

  useEffect(() => {
    getPokemonDetail(pokemon.name).then((response) => {
      setPokemonData(response);
      setCardColor(colorMap[response.types[0].type.name]);
    });
  }, []);

  return (
    <StylePokeCard key={pokemon.id} cardColor={cardColor}>
      <div className="card__elipse">
        <div className="card__content">
          <div className="card__image">
            <img
              src={pokemonData?.sprites.other.dream_world.front_default}
              alt=""
            />
          </div>
          <div className="card__name">{pokemonData?.name}</div>
          <div className="card__types">
            {pokemonData?.types.map((type: any, index: number) => (
              <TypeButton
                type={type.type.name}
                text={type.type.name}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </StylePokeCard>
  );
};

export default PokeCard;
