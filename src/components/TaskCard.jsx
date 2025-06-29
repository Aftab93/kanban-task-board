import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { updateTaskStatus, deleteTask } from "../redux/features/taskSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleDragEnd = (event, info) => {
    const { offset } = info;
    if (offset.x > 100 && task.status === "todo") {
      dispatch(updateTaskStatus({ id: task.id, status: "in-progress" }));
    } else if (offset.x > 100 && task.status === "in-progress") {
      dispatch(updateTaskStatus({ id: task.id, status: "done" }));
    } else if (offset.x < -100 && task.status === "done") {
      dispatch(updateTaskStatus({ id: task.id, status: "in-progress" }));
    } else if (offset.x < -100 && task.status === "in-progress") {
      dispatch(updateTaskStatus({ id: task.id, status: "todo" }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <motion.div
      className="p-3 rounded-lg shadow relative cursor-grab active:cursor-grabbing transition-colors duration-300"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
      style={{
        backgroundColor: "var(--color-card-bg)",
        color: "var(--color-text)",
      }}>
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        onClick={handleDelete}
        title="Delete Task">
        ✕
      </button>
      <h3 className="font-semibold">{task.title}</h3>
      <p style={{ color: "var(--color-text-secondary)" }} className="text-sm">
        {task.description}
      </p>
    </motion.div>
  );
};

export default TaskCard;
