// src/components/ui/ColorTest.jsx

export default function ColorTest() {
  return (
    <div className="p-4 space-y-4">
      <div className="text-neonPink font-bold text-xl">Neon Pink</div>
      <div className="text-neonBlue font-bold text-xl">Neon Blue</div>
      <div className="text-neonGreen font-bold text-xl">Neon Green</div>
      <div className="text-neonPurple font-bold text-xl">Neon Purple</div>

      <button className="bg-neonPink text-white px-4 py-2 rounded shadow-glow hover:scale-110 transition">
        Neon Button
      </button>
    </div>
  );
}
