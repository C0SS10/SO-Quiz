import { useNavigate } from "react-router-dom";
import '../styles/Landing.css'

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 className="landing-title">Autenticación</h1>
      <button className="start-btn" onClick={() => navigate("/quiz")}>
        Iniciar
      </button>
    </div>
  );
}