import React from "react";
import { useSelector } from "react-redux";

import {TodoItem} from "./TodoItem";

import { selectors } from "../selectors/todo";

export function AppContent() {
  const todoList = useSelector(selectors.getTasks);

 return(
  <>
  <div>
    {
      todoList && todoList.length > 0 
      ? (todoList.map((todo) => (<TodoItem key={todo.id} todo={todo} />)))
      : ( <p>No Todos</p>)
    }
  </div>
  </>
 );
}