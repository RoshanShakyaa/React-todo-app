import React, { useState } from "react";

const TodoInput = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          if (!todo) {
            return;
          }
          handleAddTodo(todo);
          setTodo("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
