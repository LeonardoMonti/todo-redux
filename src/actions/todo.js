import { createAction } from "redux-actions";

import { types } from "../types/todo";

const actions = {
  addTodo: createAction(types.TODO_ADD_TASK),
  removeTodo: createAction(types.TODO_REMOVE_TASK),
  updateTodo: createAction(types.TODO_UPDATE_TASK),
};

export { actions };