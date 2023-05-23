import React, { useEffect, useState } from 'react';
import './GameSelection.css';
import { useGetRandomHouses } from '../../../Core/Hooks/GetRandomHouse';

const GameSelection = (props: any) => {
  const [houseSelection, _] = useState(props?.house ? useGetRandomHouses() : props.selected);
  //   const houseSelection = useGetRandomHouses();
  return (
    <>
      <div className="game-selection">
        <h1 className="game-selection__text">{props.text}</h1>
        <div className="selected">
          <p>{houseSelection}</p>
        </div>
      </div>
    </>
  );
};

export default GameSelection;
