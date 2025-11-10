import { ChevronRight } from "lucide-react";
import { QuestionCard } from "./QuestionCard";
import { Results } from "./Result";
import { Timer } from "./Timer";
import "../styles/App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { questions } from "../constants/questions";
import type { Answers } from "../types";

export default function AuthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasVerified, setHasVerified] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const calculateScore = useCallback(() => {
    return questions.reduce((count, q, index) => {
      const userAnswer = answers[index];
      if (q.type === "multiple" && userAnswer === q.correctAnswer) {
        return count + 1;
      }
      if (q.type === "boolean" && userAnswer === q.correctAnswer) {
        return count + 1;
      }
      return count;
    }, 0);
  }, [answers]);

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setTime(30);
    setIsRunning(true);
    setShowResults(false);
    setScore(0);
  };

  const verifyAnswer = useCallback(() => {
    setIsRunning(false);

    const currentQ = questions[currentQuestion];
    const userAnswer = answers[currentQuestion];
    const correct = userAnswer === currentQ.correctAnswer;

    setIsCorrect(correct);
    setShowFeedback(true);

    import("canvas-confetti").then((confetti) => {
      if (correct) {
        confetti.default({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
    });

    setTimeout(() => {
      setShowFeedback(false);
      setIsRunning(true);
      setHasVerified(false);

      setCurrentQuestion((prev) => {
        const next = prev + 1;
        if (next >= questions.length) {
          const finalScore = calculateScore();
          setScore(finalScore);
          setShowResults(true);
          return prev;
        }

        setTime(30);
        return next;
      });
    }, 2000);
  }, [answers, currentQuestion, calculateScore, hasVerified]);

  useEffect(() => {
    if (!isRunning || showResults || showFeedback) return;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          if (!hasVerified) {
            setHasVerified(true);
            clearInterval(timerRef.current!);
            timerRef.current = null;
            setIsRunning(false);
            verifyAnswer();
          }
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, showResults, showFeedback, hasVerified, verifyAnswer]);

  const handleAnswerChange = useCallback(
    (answer: string | number | boolean) => {
      setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
    },
    [currentQuestion]
  );

  const handlePause = () => setIsRunning((prev) => !prev);
  const handleReset = () => setTime(30);

  if (showResults) {
    return <Results score={score} total={questions.length} onRestart={handleRestart} />;
  }

  const current = questions[currentQuestion];

  return (
    <div className="app-container">
      <QuestionCard
        question={current}
        answer={answers[currentQuestion]}
        onAnswerChange={handleAnswerChange}
        questionNumber={currentQuestion + 1}
        total={questions.length}
      />

      <div className="sidebar">
        <Timer
          time={time}
          isRunning={isRunning}
          onPause={handlePause}
          onReset={handleReset}
        />

        <button
          className="next-btn"
          onClick={verifyAnswer}
          disabled={answers[currentQuestion] === undefined}
        >
          Verificar
          <ChevronRight size={30} />
        </button>
      </div>
      {showFeedback && (
        <div className="feedback-modal">
          <div className={`feedback-content ${isCorrect ? "correct" : "incorrect"}`}>
            {isCorrect ? "✅ Correcto" : "❌ Incorrecto"}
          </div>
        </div>
      )}
    </div>
  );
}
