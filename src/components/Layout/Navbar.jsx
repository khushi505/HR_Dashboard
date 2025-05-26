"use client";

import { useRouter } from "next/navigation";
import useStore from "@/store/useStore";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const { bookmarks } = useStore();
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
    const newTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-4 flex justify-between items-center shadow">
      <h1
        className="text-xl font-bold cursor-pointer text-blue-600 dark:text-blue-400"
        onClick={() => router.push("/")}
      >
        HR Dashboard
      </h1>

      <div className="flex gap-3">
        <button
          onClick={() => router.push("/bookmarks")}
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
        >
          Bookmarks ({bookmarks.length})
        </button>

        <button
          onClick={() => router.push("/analytics")}
          className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm"
        >
          📊 Analytics
        </button>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-sm"
        >
          {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
