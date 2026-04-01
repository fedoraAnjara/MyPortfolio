import { useEffect, useState } from "react";
import myPhoto from "../assets/1.png";
import BackgroundEffects from "./BackgroundEffects";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // petit delay pour fade
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">

        <BackgroundEffects />

      {/* Arrière-plan dynamique avec formes floues */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Glass container */}
      <div className={` relative z-10 bg-white/10 
                    backdrop-blur-lg 
                    border border-white/20 
                    rounded-3xl shadow-xl 
                    max-w-6xl w-full flex flex-col 
                    md:flex-row items-center md:items-start 
                    gap-8 px-12 md:px-20 lg:px-24 py-16 md:py-20 transition-all 
                    duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        {/* Texte à gauche */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent mb-4">
            Bonjour, je suis Fedora
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-6">
            Développeur Fullstack passionné par React, TypeScript et l’IA.
            J’aime créer des applications modernes et performantes.
          </p>
          <a
            href="#projects"
            className="inline-block bg-white/20 text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-md hover:bg-white/30 transition-transform transform hover:scale-105"
          >
            Voir mes projets
          </a>
        </div>

        {/* Image à droite */}
        <div className="flex-1 flex justify-center md:justify-end relative">

        {/* Glow derrière */}
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* Cercle glass autour */}
        <div className="relative p-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">

            {/* Image */}
            <img
            src={myPhoto}
            alt="Fedora"
            className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full 
                        border-4 border-white/30 
                        shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                        transition-all duration-500
                        hover:scale-105 hover:-translate-y-2
                        animate-[float_6s_ease-in-out_infinite]"
            />
        </div>
        </div>
      </div>
    </section>
  );
}