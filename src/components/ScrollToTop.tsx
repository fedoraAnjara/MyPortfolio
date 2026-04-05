import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Montrer le bouton quand on scroll down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // effet smooth scroll
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 bg-purple-300 hover:bg-purple-600 text-black p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
        >
            <FiArrowUp size={24} />        
        </button>
      )}
    </>
  );
}