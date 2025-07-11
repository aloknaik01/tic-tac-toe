import { createContext, useContext, useState } from "react";

const GameModeContext = createContext();

export const GameModeProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(null);

  return (
    <GameModeContext.Provider value={{ gameMode, setGameMode }}>
      {children}
    </GameModeContext.Provider>
  );
};

export const useGameModeContext = () => useContext(GameModeContext);
