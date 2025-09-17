import Layout from "../components/Layout";
import { useState } from "react";

const questions = [
  {
    question: "What is the meaning of 'dân chủ'?",
    options: [
      "Rule by the people",
      "Rule by the king",
      "Rule by the party",
      "Rule by the army",
    ],
    answer: 0,
  },
  {
    question: "Which event marked the official start of socialist democracy?",
    options: [
      "French Revolution",
      "Công xã Pari (1871)",
      "Cách mạng Tháng Mười Nga 1917",
      "Vietnamese August Revolution",
    ],
    answer: 2,
  },
];

function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (idx) => {
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === questions[step].answer) {
      setScore(score + 1);
    }
    if (step < questions.length - 1) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Quiz: Dân chủ xã hội chủ nghĩa
        </h1>
        {!showResult ? (
          <div className="w-full max-w-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-4">
              {questions[step].question}
            </h2>
            <div className="space-y-3 mb-6">
              {questions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 font-medium ${
                    selected === idx
                      ? "bg-blue-100 border-blue-400"
                      : "bg-white border-gray-200 hover:bg-blue-50"
                  }`}
                  onClick={() => handleOptionClick(idx)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition-all"
              onClick={handleNext}
              disabled={selected === null}
            >
              {step < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        ) : (
          <div className="w-full max-w-xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Quiz Completed!
            </h2>
            <p className="text-lg mb-2">
              Your score:{" "}
              <span className="font-bold text-green-600">
                {score} / {questions.length}
              </span>
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition-all"
              onClick={() => {
                setStep(0);
                setScore(0);
                setSelected(null);
                setShowResult(false);
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Quiz;
