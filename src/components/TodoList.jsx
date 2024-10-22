import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({
  todos,
  activeTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  const filterTodoList =
    activeTab === "All"
      ? todos
      : activeTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
            key={todoIndex}
            todoIndex={todoIndex}
            todo={todo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
