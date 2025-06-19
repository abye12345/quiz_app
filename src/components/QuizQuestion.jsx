import React from "react";

const QuizQuestion = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="mb-6">
        <span className="text-sm text-gray-500 font-medium">
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option) => (
          <label
            key={option.id}
            className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedAnswer === option.id
                ? "border-indigo-500 bg-indigo-50"
                : "border-gray-200 hover:border-indigo-300"
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.id}
              checked={selectedAnswer === option.id}
              onChange={() => onAnswerSelect(question.id, option.id)}
              className="mt-1 mr-3 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-gray-700 text-lg">
              <span className="font-semibold mr-2">{option.id}.</span>
              {option.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
