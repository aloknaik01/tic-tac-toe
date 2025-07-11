import { useState } from "react";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import ColorTest from "./components/ui/ColorTest";
import DarkModeToggle from "./components/ui/DarkModeToggle";
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
  }
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-neonPink">Tic Tac Toe</h1>
        <DarkModeToggle />
        <div
          className="
  p-4 rounded
  bg-white dark:bg-darkBg
  text-black dark:text-white
"
        >
          Hello Dark Mode!
        </div>

        <div className="
  p-6 rounded-lg
  bg-neonPink text-white
  dark:bg-neonBlue dark:text-black
">
  Neon Button
</div>
      </div>
      <ColorTest />
    </>
  );
}

export default App;
