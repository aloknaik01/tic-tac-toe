import { useState } from "react";
import DarkModeToggle from "./components/ui/DarkModeToggle";
import { useGameModeContext } from "./context/GameModeContext";
function App() {
  const [mode, setMode] = useState(null);
  const [dark, setDark] = useState(true);

  function handleSelectMode(selectedMode) {
    console.log("User selected mode:", selectedMode);
    setMode(selectedMode);

    //Toggle Dark and Light Mode
    const toggle = () => {
      document.documentElement.classList.toggle("dark");
      setDark(!dark);
    };

    // Game Mode Context
    const { gameMode } = useGameModeContext();
  }
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
