import React, { useState, useEffect } from "react";
import "./index.css";
import WelcomeScreen from "./components/WelcomeScreen";
import QuizQuestion from "./components/QuizQuestion";
import QuizResults from "./components/QuizResults";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Sample quiz data - you can expand this
  const quizData = [
    {
      id: 1,
      question: "What is Machine Learning?",
      options: [
        {
          id: "A",
          text: "The selective acquisition of knowledge through the use of computer programs",
        },
        {
          id: "B",
          text: "The selective acquisition of knowledge through the use of manual programs",
        },
        {
          id: "C",
          text: "The autonomous acquisition of knowledge through the use of computer programs",
        },
        {
          id: "D",
          text: "The autonomous acquisition of knowledge through the use of manual programs",
        },
      ],
      correctAnswer: "C",
    },
    {
      id: 2,
      question:
        "Which programming language is most commonly used for Machine Learning?",
      options: [
        { id: "A", text: "Java" },
        { id: "B", text: "Python" },
        { id: "C", text: "C++" },
        { id: "D", text: "JavaScript" },
      ],
      correctAnswer: "B",
    },
    {
      id: 3,
      question: "What is the primary goal of supervised learning?",
      options: [
        { id: "A", text: "To find patterns in data without labels" },
        { id: "B", text: "To predict outcomes based on labeled training data" },
        {
          id: "C",
          text: "To optimize system performance through trial and error",
        },
        { id: "D", text: "To classify data into predefined categories only" },
      ],
      correctAnswer: "B",
    },
    {
      id: 4,
      question: "What is the difference between AI and Machine Learning?",
      options: [
        { id: "A", text: "There is no difference, they are the same thing" },
        { id: "B", text: "AI is broader, ML is a subset of AI" },
        { id: "C", text: "ML is broader, AI is a subset of ML" },
        { id: "D", text: "AI focuses on robotics, ML focuses on data" },
      ],
      correctAnswer: "B",
    },
    {
      id: 5,
      question: "Which of the following is NOT a type of Machine Learning?",
      options: [
        { id: "A", text: "Supervised Learning" },
        { id: "B", text: "Unsupervised Learning" },
        { id: "C", text: "Reinforcement Learning" },
        { id: "D", text: "Manual Learning" },
      ],
      correctAnswer: "D",
    },
  ];

  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setTimeLeft(600);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(selectedAnswers).forEach((questionId) => {
      const question = quizData.find((q) => q.id === parseInt(questionId));
      if (question && selectedAnswers[questionId] === question.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: quizData.length };
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Timer effect
  useEffect(() => {
    let timer;
    if (showQuiz && !quizCompleted && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setQuizCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showQuiz, quizCompleted, timeLeft]);

  if (quizCompleted) {
    return <QuizResults score={calculateScore()} onRestart={startQuiz} />;
  }

  if (!showQuiz) {
    return <WelcomeScreen onStartQuiz={startQuiz} quizData={quizData} />;
  }

  const currentQ = quizData[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
              Question {currentQuestion + 1} of {quizData.length}
            </h1>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="bg-red-100 px-4 py-2 rounded-full">
                <span className="text-red-600 font-semibold">
                  Time: {formatTime(timeLeft)}
                </span>
              </div>

              <div className="bg-indigo-100 px-4 py-2 rounded-full">
                <span className="text-indigo-600 font-semibold">
                  {Math.round(((currentQuestion + 1) / quizData.length) * 100)}%
                  Complete
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Component */}
        <QuizQuestion
          question={currentQ}
          selectedAnswer={selectedAnswers[currentQ.id]}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={currentQuestion + 1}
          totalQuestions={quizData.length}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
              currentQuestion === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-600 hover:bg-gray-700 text-white"
            }`}
          >
            Previous
          </button>

          <button
            onClick={nextQuestion}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            {currentQuestion === quizData.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
