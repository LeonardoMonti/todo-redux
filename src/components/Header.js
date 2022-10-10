import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import { TodoModal } from "./TodoModal";

export function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const updateFilter = (e) => {
    console.log(`update filter //${e}`);
  };

 return(
  <div>
        <h1>Todo Redux</h1>
    <Button onClick={() => setModalOpen(true)}>
      add Task
    </Button>
    <SelectButton
            id="status"
            onChange={(e) => updateFilter(e)}
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