import { Award, RotateCcw } from "lucide-react";
import '../styles/Results.css'

type ResultsProps = {
  score: number,
  total: number,
  onRestart: () => void,
}

export const Results = ({ score, total, onRestart }: ResultsProps) => {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <div className="results-container">
      <div className="results-card">
        <Award size={64} className="award-icon" />
        <h2 className="results-title">¡Cuestionario Completado!</h2>
        <div className="score-display">
          <span className="score-number">{score}</span>
          <span className="score-total">/ {total}</span>
        </div>
        <div className="percentage">{percentage}% Correcto</div>
        <button className="restart-btn" onClick={onRestart}>
          <RotateCcw size={20} />
          Reintentar
        </button>
      </div>
    </div>
  );
};