"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", theme);
    setIsDark(theme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm text-black dark:text-white"
    >
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
