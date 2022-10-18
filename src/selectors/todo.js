import { createSelector } from "reselect";

const getTasks = createSelector(
  state => state.todoReducers.tasks,
  tasks => tasks,
);

const filterStatus = createSelector(
  state => state.todoReducers.filterStatus,
  filterStatus => filterStatus
);

const selectors = {
  getTasks,
  filterStatus
};

export { selectors };