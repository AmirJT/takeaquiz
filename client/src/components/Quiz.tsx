import { useState } from 'react';
import type { Question } from '../models/Question.js';
import { getQuestions } from '../services/questionApi.js';

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuestions([]);
  };

  const startQuiz = async () => {
    setLoading(true);
    try {
      const fetchedQuestions = await getQuestions();
      setQuestions(fetchedQuestions);
      setQuizStarted(true);
    } catch (err) {
      console.error('Failed to load questions', err);
    }
    setLoading(false);
  };

  const handleStartQuizClick = async () => {
    await startQuiz();
  };

  const handleTakeNewQuizClick = () => {
    resetQuiz();
  };

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 1);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setQuizCompleted(true);
    }
  };

  if (!quizStarted) {
    return (
      <div className="p-4 text-center">
        <button className="btn btn-primary" onClick={handleStartQuizClick} disabled={loading}>
          {loading ? 'Loading...' : 'Start Quiz'}
        </button>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="card p-4 text-center">
        <h2>Quiz Completed</h2>
        <div className="alert alert-success">
          Your score: {score}/{questions.length}
        </div>
        <button className="btn btn-primary" onClick={handleTakeNewQuizClick}>
          Take New Quiz
        </button>
      </div>
    );
  }

  if (questions.length === 0 || loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="card p-4">
      <h2>{currentQuestion.question}</h2>
      <div className="mt-3">
        {currentQuestion.answers.map((answer, i) => (
          <div key={i} className="d-flex align-items-center mb-2">
            <button
              className="btn btn-primary"
              onClick={() => handleAnswerClick(answer.isCorrect)}
            >
              {i + 1}
            </button>
            <div className="alert alert-secondary mb-0 ms-2 flex-grow-1">{answer.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;