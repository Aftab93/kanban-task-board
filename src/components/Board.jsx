import React from "react";
import Column from "./Column";

const Board = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full h-full p-4 gap-4">
      <Column status="todo" title="To Do" />
      <Column status="in-progress" title="In Progress" />
      <Column status="done" title="Done" />
    </div>
  );
};

export default Board;
