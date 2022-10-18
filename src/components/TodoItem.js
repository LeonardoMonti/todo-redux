import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { actions } from "../actions/todo";
import { TodoModal } from "./TodoModal";

export function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(actions.
      updateTodo({ ...todo,
        status: checked
        ? "incomplete"
        : "complete"
      })
    );
  };

  const handleDelete = () => {
    dispatch(actions
      .removeTodo({
        id: todo.id
      }));
    toast.success("Todo Deleted Successfully");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

 return(
  <div>
    <input type="checkbox" checked={checked} onChange={ () =>  handleCheck()}/>
    <div>
      <p>{todo.title}</p>
      <p>{todo.time}</p>
    </div>
    <div>
      <button
        onClick={() => handleUpdate()}
      >
        editar
      </button>
      <button
        onClick={() => handleDelete()}
      >
        excluir
      </button>
    </div>
    <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
  </div>
 );
}