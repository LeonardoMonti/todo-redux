import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import { actions } from "../actions/todo";

const tasks = handleActions({
  [actions.addTodo]: (state, action) => [
    ...state,
    action.payload
  ],
  [actions.removeTodo]: (state, action) => [
    ...state.filter(todo => todo.id !== action.payload.id),
  ],
  [actions.updateTodo]: (state, action) => [
    ...state.filter(todo => {
      if (todo.id === action.payload.id) {
        todo.status = action.payload.status;
        todo.title = action.payload.title;
      }
      return todo;
    }),
  ],
}, []);

const filterStatus = handleActions({
  [actions.updateFilterStatus]: (_state, action) => action.payload,
}, "all");

const reducers = combineReducers({
  tasks,
  filterStatus
});

export { reducers };