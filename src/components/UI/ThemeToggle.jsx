// "use client";

// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   // Load theme preference on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setIsDark(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const html = document.documentElement;
//     const currentlyDark = html.classList.contains("dark");

//     if (currentlyDark) {
//       html.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDark(false);
//     } else {
//       html.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDark(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm text-black dark:text-white"
//     >
//       {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
//     </button>
//   );
// }
