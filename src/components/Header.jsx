import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/todo";
import { selectors } from "../selectors/todo";
import Button, { SelectButton } from "./Button";
import { TodoModal } from "./TodoModal";

import styles from "../styles/modules/app.module.scss";

export function Header() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector(selectors.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const updateFilter = ({ target }) => {
    setFilterStatus(target.value);
    dispatch(actions.updateFilterStatus(target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button onClick={() => setModalOpen(true)}>
        add Task
      </Button>
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="complete">Completed</option>
        <option value="incomplete">Incomplete</option>
      </SelectButton>
      <TodoModal
        type="add"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}
