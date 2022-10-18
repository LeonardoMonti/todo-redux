import React from "react";
import { useSelector } from "react-redux";

import {TodoItem} from "./TodoItem";

import { selectors } from "../selectors/todo";

export function AppContent() {
  const todoList = useSelector(selectors.getTasks);
  const filterStatus = useSelector(selectors.filterStatus);
  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {{
      return true;
    }}
    
    return item.status === filterStatus;
  });
  
 return(
  <>
  <div>
    {
      filteredTodoList && filteredTodoList.length > 0
      ? (filteredTodoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      )))
      : (<p>no todo found</p>)
    }
  </div>
  </>
 );
}