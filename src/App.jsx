import React from "react";
import AddTaskModal from "./components/AddTaskModal";
import Board from "./components/Board";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <div className="mb-20 fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-5xl w-[90%] backdrop-blur bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg transition-colors duration-300">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          📝 Kanban Task Board
        </h1>
        <ThemeToggle />
      </div>

      <div className="pt-28 max-w-5xl mx-auto p-4">
        <AddTaskModal />
        <Board />
      </div>
    </div>
  );
};

export default App;
