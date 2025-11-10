import type { Question } from "../types";
import "../styles/QuestionCard.css";

interface QuestionCardProps {
  question: Question;
  answer?: string | number | boolean;
  onAnswerChange: (answer: string | number | boolean) => void;
  questionNumber: number;
  total: number;
}

export const QuestionCard = ({
  question,
  answer,
  onAnswerChange,
  questionNumber,
  total,
}: QuestionCardProps) => {
  return (
    <div className="question-card neumorphism">
      <header className="question-header">
        <span className="question-number">
          Pregunta {questionNumber} de {total}
        </span>
      </header>

      <h2 className="question-text">{question.question}</h2>

      {question.type === "multiple" && (
        <div className="options-container">
          {question.options?.map((option, index) => (
            <label key={index} className="option-label neumorphism-inset">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={index}
                checked={answer === index}
                onChange={() => onAnswerChange(index)}
                className="option-input"
              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === "boolean" && (
        <div className="boolean-options">
          <label className="option-label neumorphism-inset">
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={answer === true}
              onChange={() => onAnswerChange(true)}
              className="option-input"
            />
            <span className="option-text">Verdadero</span>
          </label>
          <label className="option-label neumorphism-inset">
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={answer === false}
              onChange={() => onAnswerChange(false)}
              className="option-input"
            />
            <span className="option-text">Falso</span>
          </label>
        </div>
      )}
    </div>
  );
};
