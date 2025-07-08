import { useState } from "react";
import ModeSelector from "./components/ModeSelector/ModeSelector";
function App() {
  const [mode, setMode] = useState(null);

  function handleSelectMode(selectedMode) {
    console.log("User selected mode:", selectedMode);
    setMode(selectedMode);
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold bg-red-400 underline">Hello world!</h1>
        {!mode && <ModeSelector onSelectMode={handleSelectMode} />}
        {mode && <h2>You chose: {mode}</h2>}
      </div>
    </>
  );
}

export default App;
