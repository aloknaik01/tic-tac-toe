import React from "react";
import { useGameModeContext } from "../../context/GameModeContext";
const GameModeSelector = () => {
  const { setGameMode, gameMode } = useGameModeContext();

  const handleGameModeSelect = (mode) => {
    setGameMode(mode);
  };

  console.log(gameMode);
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-neonPink">Choose Game Mode</h1>

      <div className="flex gap-6 mt-8">
        <button
          onClick={() => handleGameModeSelect("pvp")}
          className="px-6 py-3 rounded-xl text-black bg-neonBlue hover:scale-105 transition-transform shadow-lg"
        >
          Player vs Player
        </button>

        <button
          onClick={() => handleGameModeSelect("pvc")}
          className="px-6 py-3 rounded-xl text-white bg-neonPink hover:scale-105 transition-transform shadow-lg"
        >
          Player vs Computer
        </button>
      </div>
    </div>
  );
};

export default GameModeSelector;
