import React, { useState } from 'react';
import Home from './components/Home';
import GameBoard from './components/GameBoard';

export default function App() {
  const [currentPuzzle, setCurrentPuzzle] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Exo_2',sans-serif]">
      {!currentPuzzle ? (
        <Home onSelectPuzzle={setCurrentPuzzle} />
      ) : (
        <GameBoard puzzle={currentPuzzle} onExit={() => setCurrentPuzzle(null)} />
      )}
    </div>
  );
}