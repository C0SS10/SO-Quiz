import { Pause, Play, RotateCcw } from "lucide-react";
import '../styles/App.css'

type TimerProps = {
  time: number,
  isRunning: boolean,
  onPause: () => void,
  onReset: () => void
}

export const Timer = ({ time, isRunning, onPause, onReset }: TimerProps) => {
  return (
    <div className="timer-container">
      <div className="timer-display">
        <span className="timer-text">{time}s</span>
      </div>
      <div className="timer-controls">
        <button
          className="control-btn"
          onClick={onPause}
          aria-label={isRunning ? "Pausar" : "Reanudar"}
        >
          {isRunning ? <Pause size={30} /> : <Play size={30} />}
        </button>
        <button
          className="control-btn"
          onClick={onReset}
          aria-label="Reiniciar"
        >
          <RotateCcw size={30} />
        </button>
      </div>
    </div>
  );
};