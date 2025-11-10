import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Landing.css";
import { Github } from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate();
  const words = ["********", "4-685-2", "1-0-4-2", "Nuevo código 📧", "👁️"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // ⌨️ Efecto de escritura
  useEffect(() => {
    if (index >= words.length) setIndex(0);

    const currentWord = words[index];
    const speed = deleting ? 80 : 150;

    const timeout = setTimeout(() => {
      setDisplayText(
        deleting
          ? currentWord.substring(0, subIndex - 1)
          : currentWord.substring(0, subIndex + 1)
      );

      if (!deleting && subIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }

      setSubIndex((prev) =>
        deleting ? Math.max(prev - 1, 0) : Math.min(prev + 1, currentWord.length)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <div className="landing-container">
      <h1>
        <span className="typing-text">{displayText}<span className="cursor">|</span></span>
      </h1>
      <h1 className="landing-title">
        Autenticación
      </h1>

      <button className="start-btn" onClick={() => navigate("/quiz")}>
        Iniciar
      </button>

      <a
        href="https://github.com/C0SS10/SO-Quiz"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
        aria-label="Ver en GitHub"
      >
        <Github size={30} />
      </a>
    </div>
  );
};
