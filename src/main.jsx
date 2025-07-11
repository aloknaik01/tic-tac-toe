import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GameModeProvider } from "./context/GameModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameModeProvider>
      <App />
    </GameModeProvider>
  </StrictMode>
);
