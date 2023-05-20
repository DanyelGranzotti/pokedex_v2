import styled from "styled-components";
import { BsFire, BsBugFill, BsFillLightningChargeFill } from "react-icons/bs";
import { GiFluffyWing, GiSeaDragon } from "react-icons/gi";
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";
import { ImDroplet } from "react-icons/im";
import { FaSkull } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { colorMap } from "../../utils/helpers";

const Button = styled.button<{ backgroundColor: string; textColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props: any) => props.backgroundColor};
  color: ${(props: any) => props.textColor};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const iconMap: any = {
  fire: BsFire,
  flying: GiFluffyWing,
  bug: BsBugFill,
  dark: WiMoonAltWaxingCrescent2,
  dragon: GiSeaDragon,
  electric: BsFillLightningChargeFill,
  grass: RiLeafFill,
  poison: FaSkull,
  water: ImDroplet,
};

const TypeButton = ({ type, text }: any) => {
  const Icon = iconMap[type];
  const backgroundColor = colorMap[type];

  return (
    <Button backgroundColor={backgroundColor} textColor="white">
      {Icon && <Icon size={18} />}
      {text}
    </Button>
  );
};

export default TypeButton;
