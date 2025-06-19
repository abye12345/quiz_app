import React from "react";

const QuizResults = ({ score, onRestart }) => {
  const { correct, total } = score;
  const percentage = Math.round((correct / total) * 100);

  const getResultMessage = () => {
    if (percentage >= 90) return "Excellent! You're a quiz master!";
    if (percentage >= 80) return "Great job! You really know your stuff!";
    if (percentage >= 70) return "Good work! Keep learning!";
    if (percentage >= 60) return "Not bad! Room for improvement.";
    return "Keep studying! You'll do better next time.";
  };

  const getResultColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Quiz Results
          </h1>

          <div className="text-center mb-8">
            <div
              className={`text-6xl md:text-8xl font-bold mb-4 ${getResultColor()}`}
            >
              {percentage}%
            </div>
            <p className="text-xl text-gray-600 mb-4">
              You got {correct} out of {total} questions correct
            </p>
            <p className="text-lg text-gray-700 font-medium">
              {getResultMessage()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Correct Answers
              </h3>
              <p className="text-3xl font-bold text-green-600">{correct}</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Incorrect Answers
              </h3>
              <p className="text-3xl font-bold text-red-600">
                {total - correct}
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <button
              onClick={onRestart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
