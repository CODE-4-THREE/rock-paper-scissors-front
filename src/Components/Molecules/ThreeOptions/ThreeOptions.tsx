import Item from "../../Atoms/Item/Item";

import {
  ICON_ROCK,
  ICON_PAPER,
  ICON_SCISSORS,
} from "../../../Resources/Images/Images";

import "./ThreeOptions.scss";

export const ThreeOptions = () => {
  return (
    <div className="three-options-container">
      <Item imageSrc={ICON_ROCK} imageAlt="" className="rock-gradient" />
      <Item imageSrc={ICON_PAPER} imageAlt="" className="paper-gradient" />
      <Item
        imageSrc={ICON_SCISSORS}
        imageAlt=""
        className="scissors-gradient"
      />
    </div>
  );
};
