"use client";

// Main page component
import { quizCategories, quizzes } from "./data/quizData";
import Link from "next/link";
import { useState } from "react";

const categoryStyles = [
  {
    bgColor: "bg-violet-50",
    hoverBgColor: "hover:bg-violet-100",
    textColor: "text-violet-800",
    borderColor: "border-violet-300",
    badgeBgColor: "bg-violet-200",
    badgeTextColor: "text-violet-800",
  },
  {
    bgColor: "bg-sky-50",
    hoverBgColor: "hover:bg-sky-100",
    textColor: "text-sky-800",
    borderColor: "border-sky-300",
    badgeBgColor: "bg-sky-200",
    badgeTextColor: "text-sky-800",
  },
  {
    bgColor: "bg-amber-50",
    hoverBgColor: "hover:bg-amber-100",
    textColor: "text-amber-800",
    borderColor: "border-amber-300",
    badgeBgColor: "bg-amber-200",
    badgeTextColor: "text-amber-800",
  },
  {
    bgColor: "bg-emerald-50",
    hoverBgColor: "hover:bg-emerald-100",
    textColor: "text-emerald-800",
    borderColor: "border-emerald-300",
    badgeBgColor: "bg-emerald-200",
    badgeTextColor: "text-emerald-800",
  },
  {
    bgColor: "bg-rose-50",
    hoverBgColor: "hover:bg-rose-100",
    textColor: "text-rose-800",
    borderColor: "border-rose-300",
    badgeBgColor: "bg-rose-200",
    badgeTextColor: "text-rose-800",
  },
];

export default function Home() {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 text-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="inline-block bg-white/60 backdrop-blur-sm p-3 rounded-2xl mb-4">
            <span className="text-4xl">🧠</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Quiz System
          </h1>
          <p className="text-lg text-slate-600">
            Select a category and topic to start answering questions
          </p>
          <p className="text-lg text-red-600">
            注意：AI 生成的題目答案可能有誤，請以原課文爲準
          </p>
        </header>

        <main className="max-w-2xl mx-auto space-y-4">
          {quizCategories.map((category, index) => {
            const style = categoryStyles[index % categoryStyles.length];
            return (
              <div
                key={category.id}
                className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 ${style.borderColor}`}
              >
                <div
                  className="px-6 py-4 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div>
                    <h2 className={`text-xl font-semibold ${style.textColor}`}>
                      {category.name}
                    </h2>
                    <p className="text-gray-600 font-semibold">
                      Lecturer: {category.lecturer}
                    </p>
                  </div>
                  <div className={style.textColor}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transition-transform duration-300 ${
                        expandedCategories[category.id]
                          ? "transform rotate-180"
                          : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {expandedCategories[category.id] && (
                  <div className="px-6 pb-6 pt-2 space-y-3">
                    {category.subcategories.map((topic) => (
                      <Link
                        href={`/quiz/${topic.quizId}`}
                        key={topic.id}
                        className={`${style.bgColor} ${style.hoverBgColor} ${style.textColor} font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-between w-full`}
                      >
                        <span>{topic.name}</span>
                        <span
                          className={`${style.badgeBgColor} ${style.badgeTextColor} text-xs font-medium py-1 px-2.5 rounded-full`}
                        >
                          {quizzes.find((q) => q.id === topic.quizId)?.questions
                            .length || 0}{" "}
                          Questions
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </main>

        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} New Quiz App by{" "}
            <Link href="https://github.com/xXQiuChenXx/">Tai Hong</Link>. All
            rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
