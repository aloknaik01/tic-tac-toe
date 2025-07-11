import { useEffect, useState } from "react";

/**
 * DarkModeToggle toggles the "dark" class on <html>
 */
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Load preference from localStorage if exists
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`px-4 py-2 rounded font-semibold transition
        ${isDark ? "bg-neonBlue text-black" : "bg-neonPink text-white"}
      `}
    >
      Toggle {isDark ? "Light" : "Dark"} Mode
    </button>
  );
}
