import { useEffect, useRef, useState } from "react";

const skills = [
  { label: "React", color: "from-cyan-400 to-blue-500" },
  { label: "Node.js", color: "from-green-400 to-emerald-600" },
  { label: "Figma", color: "from-yellow-400 to-orange-400" },
  { label: "PostgreSQL/MongoDB", color: "from-blue-500 to-blue-700" },
  { label: "Photoshop", color: "from-purple-400 to-pink-500" },
  { label: "Illustrator", color: "from-blue-400 to-indigo-500" },
  { label: "InDesign", color: "from-sky-400 to-cyan-500" },
];

const stats = [
  { value: "3+", label: "ans d'expérience" },
  { value: "20+", label: "projets livrés" },
  { value: "∞", label: "café" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Blobs */}
      <div className="absolute top-1/4 -left-32 sm:-left-40 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 sm:-right-40 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink-500/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl w-full">

        {/* Label */}
        <div className={`flex items-center gap-3 mb-10 ${visible ? "opacity-100" : "opacity-0 translate-y-4"} transition-all`}>
          <span className="h-px w-8 bg-gradient-to-r from-purple-400 to-pink-400" />
          <span className="text-xs tracking-widest uppercase text-white/60">
            À propos
          </span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT */}
          <div className="space-y-6">

            {/* Title */}
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight transition-all ${visible ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              <span className="text-white">Qui suis-je</span><br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
                vraiment ?
              </span>
            </h2>

            {/* Bio */}
            <div className={`space-y-4 text-white/70 text-sm sm:text-base md:text-lg transition-all ${visible ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              <p>
                Je m'appelle <span className="text-white font-semibold">HARILANDY Fedora</span>, 
                Front-End Developer & UI Designer basé à Madagascar.
              </p>
              <p>
                Je crée des <span className="text-pink-300">interfaces modernes</span> et des 
                supports visuels (posters, flyers, magazines).
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
                    {s.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/50">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl text-sm sm:text-base text-center">
                Me contacter
              </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-white/10 border border-white/20 text-white px-5 py-3 rounded-xl text-sm sm:text-base text-center hover:bg-white/20 transition"
            >
              Mon CV
            </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* Skills */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6">
              <p className="text-white/40 text-xs mb-4">Stack technique</p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.label}
                    className={`px-3 py-1 cursor-pointer rounded-full text-xs sm:text-sm text-white bg-gradient-to-r ${skill.color}`}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Ce que j'aime */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6">
              <p className="text-white/40 text-xs mb-4">Ce que j'aime</p>
<ul className="space-y-4">
  {[
    { title: "Créer des visuels", desc: "marquer les esprits" },
    { title: "Satisfaire", desc: "Écouter un client et traduire sa vision en design" },
    { title: "Concevoir de A à Z", desc: "du concept brut jusqu'au rendu final" },
    { title: "Un travail bien fait", desc: "Livrer des fichiers propres et bien organisés" },
  ].map((item, i) => (
    <li
      key={item.title}
      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group"
      style={{
        transitionDelay: `${i * 60 + 400}ms`,
        transition: "all 0.5s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(12px)",
      }}
    >
      {/* Ligne gauche */}
      <span className="hidden sm:block shrink-0 w-6 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-10 transition-all duration-300" />

      <div className="flex flex-col sm:flex-row sm:items-center w-full gap-1 sm:gap-3">
        
        {/* Title */}
        <span className="text-white text-sm font-semibold cursor-pointer">
          {item.title}
        </span>

        {/* Ligne centrale (desktop only) */}
        <div className="hidden sm:block h-px flex-1 bg-white/5 group-hover:bg-white/15 transition-colors duration-300" />

        {/* Description */}
        <span className="text-white/40 text-xs sm:text-sm">
          {item.desc}
        </span>
      </div>
    </li>
  ))}
</ul>
            </div>

            {/* Status */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <p className="text-white/70 text-sm">
                Disponible pour freelance
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}