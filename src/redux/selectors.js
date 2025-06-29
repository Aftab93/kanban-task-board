import { createSelector } from "reselect";

export const selectTasks = (state) => state.tasks.tasks;

export const makeSelectTasksByStatus = (status) =>
  createSelector([selectTasks], (tasks) =>
    tasks.filter((task) => task.status === status)
  );
