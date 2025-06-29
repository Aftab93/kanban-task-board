import React from "react";
import { useSelector } from "react-redux";
import { makeSelectTasksByStatus } from "../redux/selectors";
import TaskCard from "./TaskCard";

const Column = ({ status, title }) => {
  const selectTasksByStatus = makeSelectTasksByStatus(status);
  const tasks = useSelector(selectTasksByStatus);

  return (
    <div
      className="rounded-xl p-4 flex-1 min-h-[300px] transition-colors duration-300 shadow"
      style={{
        backgroundColor: "var(--color-column-bg)",
        color: "var(--color-text)",
      }}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
