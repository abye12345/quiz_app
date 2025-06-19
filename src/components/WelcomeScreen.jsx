import React from "react";

const WelcomeScreen = ({ onStartQuiz, quizData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Quiz App
            </h1>
            <p className="text-lg text-gray-600">
              Test your knowledge with our interactive quiz!
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-600 bg-gray-50 p-4 rounded-xl">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{quizData.length} Questions</span>
            </div>

            <div className="flex items-center justify-center space-x-3 text-lg text-gray-600 bg-gray-50 p-4 rounded-xl">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>10 Minutes Time Limit</span>
            </div>

            <div className="flex items-center justify-center space-x-3 text-lg text-gray-600 bg-gray-50 p-4 rounded-xl">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Instant Results</span>
            </div>
          </div>

          <button
            onClick={onStartQuiz}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 w-full md:w-auto"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
