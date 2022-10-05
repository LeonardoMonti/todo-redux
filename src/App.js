import React, { useState } from "react";

function App() {
  const [task, updateTask] = useState('')
  const [tasks, updateTasks] = useState([])

  const handleInputChange = event => {
    updateTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    updateTasks(oldTasks => [
      ...oldTasks,
      task,
    ])
    updateTask('')
  }

  return (
    <>
      <form onSubmit={ handleFormSubmit }>
        <input onChange={ handleInputChange } value={ task }/>
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((t, i ) => (
          <li key={ i }>{ t }</li>
        ))}
      </ul>
    </>
  );
}

export default App;
