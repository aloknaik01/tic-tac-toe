import { useState } from "react";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import ColorTest from "./components/ui/ColorTest";
function App() {
  const [mode, setMode] = useState(null);

  function handleSelectMode(selectedMode) {
    console.log("User selected mode:", selectedMode);
    setMode(selectedMode);
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold bg-red-400 underline">
          Hello world!
        </h1>
        <div className="glass p-4">Glassmorphism content</div>
        {!mode && <ModeSelector onSelectMode={handleSelectMode} />}
        {mode && <h2>You chose: {mode}</h2>}
      </div>
      <ColorTest />
    </>
  );
}

export default App;
