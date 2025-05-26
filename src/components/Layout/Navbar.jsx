"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import useStore from "@/store/useStore";
import CreateUserModal from "../UI/CreateUserModal";

export default function Navbar() {
  const router = useRouter();
  const { bookmarks } = useStore();
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();

  // Load theme preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const newTheme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-4 flex justify-between items-center shadow">
        {/* Brand */}
        <h1
          className="text-xl font-bold cursor-pointer text-blue-600 dark:text-blue-400"
          onClick={() => router.push("/")}
        >
          HR Dashboard
        </h1>

        {/* Action Buttons */}
        <div className="flex gap-3 items-center flex-wrap">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
          >
            Create User
          </button>

          <button
            onClick={() => router.push("/bookmarks")}
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
          >
            ({bookmarks.length}) Bookmarks
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

          {/* Auth Buttons */}
          {session ? (
            <>
              <span className="text-sm font-medium truncate max-w-[140px]">
                {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="px-3 py-1 rounded bg-red-600 text-white text-sm hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="px-3 py-1 rounded bg-purple-600 text-white text-sm hover:bg-purple-700"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Create User Modal */}
      <CreateUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
