import { createAction } from 'redux-actions'

import { types } from '../types/todo';

const actions = {
  addTask: createAction(types.TODO_ADD_TASK),
  removeTask: createAction(types.TODO_REMOVE_TASK),
}

export { actions }