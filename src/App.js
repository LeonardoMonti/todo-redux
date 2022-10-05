import React, { useState } from "react";
import { connect } from 'react-redux';

function App({ tasks, addTask }) {
  const [task, updateTask] = useState('')

  const handleInputChange = event => {
    updateTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    addTask(task)

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

const mapStateToProps = (state) => ({
  tasks: state,
})

const mapDispatchToProps = (dispatch) => ({
  addTask: task => dispatch({
    type: 'ADD_TASK',
    payload: task
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
