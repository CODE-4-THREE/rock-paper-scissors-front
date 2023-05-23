import React from 'react';
import './WinLoseMessage.css';

const WinLoseMessage = () => {
  const [gameState, setGameState] = React.useState('LOSE');
  return (
    <>
      <div className="container">
        <h1 className="container__text">You {gameState}</h1>
        <div className="container__btn">
          <a href="/">Play again</a>
        </div>
      </div>
    </>
  );
};

export default WinLoseMessage;
