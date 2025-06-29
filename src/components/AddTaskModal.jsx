import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/taskSlice";

const AddTaskModal = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      description: desc,
      status: "todo", // default
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDesc("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="Task title"
        className="p-2 rounded border flex-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="p-2 rounded border flex-1"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskModal;
