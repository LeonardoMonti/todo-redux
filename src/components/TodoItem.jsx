import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { PencilSimpleLine, X } from "phosphor-react";
import { actions } from "../actions/todo";
import { TodoModal } from "./TodoModal";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { CheckButton } from "./CheckButton";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(actions
      .updateTodo({
        ...todo,
        status: checked
          ? 'incomplete'
          : 'complete',
      }));
  };

  const handleDelete = () => {
    dispatch(actions
      .removeTodo({
        id: todo.id,
      }));
    toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p
              className={styles.time}
            >
              {todo.time}
            </p>
          </div>
          <div className={styles.todoActions}>
            <button
              className={styles.icon}
              onClick={() => handleUpdate()}
              onKeyDown={() => handleUpdate()}
            >
              <PencilSimpleLine />
            </button>
            <button
              className={styles.icon}
              onClick={() => handleDelete()}
              onKeyDown={() => handleDelete()}
            >
              <X />
            </button>
          </div>
          <TodoModal
            type="update"
            modalOpen={updateModalOpen}
            setModalOpen={setUpdateModalOpen}
            todo={todo}
          />
        </div>
      </motion.div>
    </>
  );
}
