"use client";

// Main page component
import { quizCategories, quizzes } from "./data/quizData";
import Link from "next/link";
import { useState } from "react";

const categoryStyles = [
  {
    gradient: "from-violet-500 to-indigo-600",
    lightBg: "bg-indigo-50/40",
    hoverBg: "hover:bg-indigo-100/50",
    textColor: "text-indigo-950",
    subtextColor: "text-indigo-600",
    borderColor: "border-indigo-100",
    accentBorder: "border-t-indigo-500",
    badgeBgColor: "bg-indigo-100/80",
    badgeTextColor: "text-indigo-800",
    shadowColor: "shadow-indigo-100/40",
    glowColor: "bg-indigo-500/10",
  },
  {
    gradient: "from-sky-500 to-blue-600",
    lightBg: "bg-sky-50/40",
    hoverBg: "hover:bg-sky-100/50",
    textColor: "text-sky-950",
    subtextColor: "text-sky-600",
    borderColor: "border-sky-100",
    accentBorder: "border-t-sky-500",
    badgeBgColor: "bg-sky-100/80",
    badgeTextColor: "text-sky-800",
    shadowColor: "shadow-sky-100/40",
    glowColor: "bg-sky-500/10",
  },
  {
    gradient: "from-amber-500 to-orange-600",
    lightBg: "bg-amber-50/40",
    hoverBg: "hover:bg-amber-100/50",
    textColor: "text-amber-950",
    subtextColor: "text-amber-700",
    borderColor: "border-amber-100",
    accentBorder: "border-t-amber-500",
    badgeBgColor: "bg-amber-100/80",
    badgeTextColor: "text-amber-800",
    shadowColor: "shadow-amber-100/40",
    glowColor: "bg-amber-500/10",
  },
  {
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50/40",
    hoverBg: "hover:bg-emerald-100/50",
    textColor: "text-emerald-950",
    subtextColor: "text-emerald-700",
    borderColor: "border-emerald-100",
    accentBorder: "border-t-emerald-500",
    badgeBgColor: "bg-emerald-100/80",
    badgeTextColor: "text-emerald-800",
    shadowColor: "shadow-emerald-100/40",
    glowColor: "bg-emerald-500/10",
  },
  {
    gradient: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50/40",
    hoverBg: "hover:bg-rose-100/50",
    textColor: "text-rose-950",
    subtextColor: "text-rose-700",
    borderColor: "border-rose-100",
    accentBorder: "border-t-rose-500",
    badgeBgColor: "bg-rose-100/80",
    badgeTextColor: "text-rose-800",
    shadowColor: "shadow-rose-100/40",
    glowColor: "bg-rose-500/10",
  },
];

const getCategoryIcon = (id: string) => {
  switch (id) {
    case "etika": return "🧠";
    case "falsafah": return "🏛️";
    case "wireless": return "📶";
    default: return "📚";
  }
};

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
    <div className="min-h-screen mesh-gradient text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto py-6">
        <header className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center bg-white shadow-md rounded-2xl p-4.5 mb-6 border border-slate-100/80 animate-float">
            <span className="text-4xl">🧠</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight font-display bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
            Smart Quiz Hub
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
            Select a category and topic to test your knowledge and track your progress.
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-amber-800 text-sm font-medium shadow-xs max-w-lg mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-left font-medium">注意：AI 生成的題目答案可能有誤，請以原課文爲準</span>
          </div>
        </header>

        <main className="space-y-5">
          {quizCategories.map((category, index) => {
            const style = categoryStyles[index % categoryStyles.length];
            const isExpanded = !!expandedCategories[category.id];
            
            return (
              <div
                key={category.id}
                className={`glass-panel rounded-2xl shadow-xs transition-all duration-300 hover:shadow-lg border-t-4 ${style.accentBorder} ${style.borderColor} overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div
                  className="px-6 py-5 cursor-pointer flex justify-between items-center select-none"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center text-xl font-bold ${style.glowColor} ${style.subtextColor} border border-white/80`}>
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h2 className={`text-lg sm:text-xl font-bold ${style.textColor} tracking-tight`}>
                        {category.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                        Lecturer: <span className="font-semibold text-slate-700">{category.lecturer}</span>
                      </p>
                    </div>
                  </div>
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${isExpanded ? style.lightBg : 'bg-slate-50'} ${style.subtextColor}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isExpanded ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-1 space-y-2.5 animate-pop-in">
                    <div className="h-px bg-slate-100 mb-3" />
                    {category.subcategories.map((topic) => (
                      <Link
                        href={`/quiz/${topic.quizId}`}
                        key={topic.id}
                        className={`group ${style.lightBg} ${style.hoverBg} ${style.textColor} font-semibold py-3 px-4.5 rounded-xl border border-transparent hover:border-white/50 transition-all duration-200 flex items-center justify-between w-full shadow-2xs hover:shadow-xs`}
                      >
                        <span className="text-sm sm:text-base tracking-wide flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full ${style.gradient.split(' ')[0]} bg-linear-to-r`} />
                          {topic.name}
                        </span>
                        <span
                          className={`text-xs font-semibold py-1 px-3 rounded-full flex items-center gap-1 shadow-2xs ${style.badgeBgColor} ${style.badgeTextColor}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5L6.855 12A1 1 0 007.72 13.5h4.56a1 1 0 00.866-1.5l-2.28-4A1 1 0 0010 7z" clipRule="evenodd" />
                          </svg>
                          {quizzes.find((q) => q.id === topic.quizId)?.questions.length || 0} Questions
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </main>

        <footer className="mt-16 text-center text-xs text-slate-400">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} Smart Quiz Hub by{" "}
            <Link href="https://github.com/xXQiuChenXx/" className="text-slate-500 hover:text-indigo-600 hover:underline font-semibold transition-colors">Tai Hong</Link>.
            <br />
            All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
