import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { actions } from '../actions/todo';

const tasks = handleActions({
  [actions.addTask]: (state, action) => [
    ...state,
    action.payload
  ],
  [actions.removeTask]: (state, action) => [
    ...state.filter(task => task.id !== action.payload.id),
  ]
}, [])


const reducers = combineReducers({
  tasks
})

export { reducers }