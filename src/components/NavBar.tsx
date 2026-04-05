import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-8 left-0 w-full flex justify-center z-50">
      <nav className="w-[90%] max-w-4xl 
        bg-white/10 backdrop-blur-lg 
        border border-white/20 
        rounded-2xl 
        shadow-lg 
        px-6 py-3 
        flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="font-semibold text-lg">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li >
            <a href="#about" className="hover:text-gray-300">About</a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">My Skills</li>
          <li className="hover:text-gray-300 cursor-pointer">Projects</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Glass Menu */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] max-w-4xl 
          bg-white/10 backdrop-blur-lg 
          border border-white/20 
          rounded-2xl 
          shadow-lg 
          p-4 text-white md:hidden">

          <ul className="flex flex-col gap-4">
            <li><a href="#about">About</a></li>
            <li>My Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}