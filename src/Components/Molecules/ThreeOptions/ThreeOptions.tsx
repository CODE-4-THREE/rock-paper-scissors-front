import React from "react";
import Item from "../../Atoms/Item/Item";

import {
  ICON_ROCK,
  ICON_PAPER,
  ICON_SCISSORS,
} from "../../../Resources/Images/Images";

export const ThreeOptions = () => {
  return (
    <div>
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
