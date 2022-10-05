import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { actions } from './actions/todo';
import { selectors } from './selectors/todo';
import './App.css'

function App() {
  const [task, updateTask] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector(selectors.getTasks)

  const handleInputChange = event => {
    updateTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(actions.addTask(task))

    updateTask('')
  }

  return (
    <div className="app">
      <h1 className="app-title">Todo Redux</h1>
      
      <form onSubmit={ handleFormSubmit }>
        <input className="task-input" onChange={ handleInputChange } value={ task }/>
        <button className="add-todo task-button">Add</button>
      </form>

      <ul className="tasks-list">
        {tasks.map((t, i ) => (
          <div className="task-item">
          <li className="task-li" key={ i }>{ t }</li>
          <div>
            <button className="update-task-button">update-${i}</button>
            <button className="remove-task-button">remove-${i}</button>
          </div>
          </div>
        ))}
      </ul>

    </div>
  );
}


export default App;
