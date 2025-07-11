import { useState } from "react";
import DarkModeToggle from "./components/ui/DarkModeToggle";
import { useGameModeContext } from "./context/GameModeContext";
import GameBoard from "./components/GameBoard/GameBoard";
import GameModeSelector from "./components/GameModeSelector/GameModeSelector";
function App() {
  const { gameMode } = useGameModeContext();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <DarkModeToggle />
        {!gameMode ? <GameModeSelector /> : <GameBoard />}
      </div>
    </>
  );
}

export default App;
