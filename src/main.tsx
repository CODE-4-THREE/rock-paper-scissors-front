import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WinLoseMessage from './Components/Atoms/WinLoseMessage/WinLoseMessage';
import GameSelection from './Components/Atoms/GameSelection/GameSelection';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <GameSelection text="You picked" selected={'rock'} component={'Componente1'} />
    <GameSelection text="the house picked" selected={'paper'} house component={'Componente2'} />
    <WinLoseMessage />
  </>
);
