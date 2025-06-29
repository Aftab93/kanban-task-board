import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition">
      {isDark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
