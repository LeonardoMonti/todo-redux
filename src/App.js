import React, { useState } from "react";
import { TrashSimple, KeyReturn } from 'phosphor-react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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

    dispatch(actions.addTask({
      id: uuidv4(),
      text: task,
    }))
    
    updateTask('')
  }
  
  const handleRemove = (id) => {
    dispatch(actions.removeTask({ id }))
  }

  return (
    <div className="app">
      <h1 className="app-title">Todo Redux</h1>
      
      <form className="app-form" onSubmit={ handleFormSubmit }>
        <input className="task-input" onChange={ handleInputChange } value={ task }/>
        <button className="add-todo task-button">
          <KeyReturn size={ 32 } />
        </button>
      </form>

      <ul className="tasks-list"> 
        {tasks.length === 0 
        ? (<h2 className="empty">Empty</h2>) 
        : (tasks.map(({ id, text } ) => (
            <div key={ id } className="task-item">
            <li id={ id } className="task-li">{ text }</li>
            <div className="task-buttons">
              <button onClick={() => handleRemove(id)} className="remove-task-button"><TrashSimple size={ 32 } /></button>
            </div>
            </div>
          )))
        }
      </ul>

    </div>
  );
}


export default App;
