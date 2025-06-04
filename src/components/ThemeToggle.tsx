import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    // Check if user has dark mode already set or prefers dark mode
    if (localStorage.getItem("theme") === "dark") return true;
    if (localStorage.getItem("theme") === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
    >
      {dark ? "🌙 Dark" : "☀ Light"}
    </button>
  );
};

export default ThemeToggle;
