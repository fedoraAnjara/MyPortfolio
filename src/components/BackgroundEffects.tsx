import { useEffect, useState } from "react";

type Square = {
  id: number;
  size: number;
  top: number;
  left: number;
  opacity: number;
  animation: "floatRotateSlow" | "floatRotateMedium" | "floatRotateFast";
};

export default function BackgroundEffects() {
  const [squares, setSquares] = useState<Square[]>(() =>
    Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      size: Math.random() * 16 + 12,
      top: Math.random() * 90 + 5,
      left: Math.random() * 90 + 5,
      opacity: 1,
      animation:
        i % 3 === 0 ? "floatRotateSlow" : i % 3 === 1 ? "floatRotateMedium" : "floatRotateFast",
    }))
  );

  // Fade out → reposition → fade in toutes les 30s
  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((prev) =>
        prev.map((sq) => ({
          ...sq,
          opacity: 0, // fade out
        }))
      );

      // Après fade out (1s), changer les positions et fade in
      const timeout = setTimeout(() => {
        setSquares((prev) =>
          prev.map((sq) => ({
            ...sq,
            top: Math.random() * 90 + 5,
            left: Math.random() * 90 + 5,
            opacity: 1, // fade in
          }))
        );
      }, 1000); // durée du fade out

      return () => clearTimeout(timeout);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Sparkles
  const sparkles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 12,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.2 + 0.05,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* ===== CARRÉS ===== */}
      {squares.map((s) => (
        <div
          key={s.id}
          className={`absolute bg-white/20 border border-white/20 rounded-lg animate-${s.animation}`}
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            top: `${s.top}%`,
            left: `${s.left}%`,
            opacity: s.opacity,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      {/* ===== SPARKLES ===== */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            opacity: s.opacity,
            animation: `sparkle ${s.duration}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}