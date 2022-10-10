import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { actions } from "../actions/todo";
import { TodoModal } from "./TodoModal";

export function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

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
    <input type="checkbox" />
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