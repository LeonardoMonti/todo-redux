import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { X } from "phosphor-react";

import Button from "../components/Button";

import { actions } from "../actions/todo";

export function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title");
      return;
    }

    if (title && status) {
      if (type === "add") {
        dispatch(actions.addTodo({
            id: uuidv4(),
            title,
            status,
            time: new Date().toLocaleDateString(),
          })
        );
        setTitle("");
        toast.success("Task added successfully");
      }

      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(actions.updateTodo({
            ...todo,
            title,
            status
          }));

          setTitle("");
          toast.success("Task Updated successfully");
        } else {
          toast.error("No changes made");
          return;
        }
      }
      setModalOpen(false);
    }
  };

 return(
  <AnimatePresence>
  {modalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          onKeyDown={() => setModalOpen(false)}
          onClick={() => setModalOpen(false)}
          role="button"
          tabIndex={0}
          // animation
          initial={{ top: 40, opacity: 0 }}
          animate={{ top: -10, opacity: 1 }}
          exit={{ top: 40, opacity: 0 }}
        >
          <X/>
        </motion.div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>
            {type === "add" ? "Add" : "Update"} TODO
          </h1>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="type">
            Status
            <select
              id="type"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Completed</option>
            </select>
          </label>
          <div>
            <Button type="submit">
              {type === "add" ? "Add Task" : "Update Task"}
            </Button>
            <Button onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )}
  </AnimatePresence>
 );
}