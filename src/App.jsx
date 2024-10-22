import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [todos, setTodos] = useState([
    { input: "Hello! add your first todo", complete: true },
  ]);

  const [activeTab, setActiveTab] = useState("Open");
  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };
  const handleCompleteTodo = (index) => {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };
  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((todo, idx) => idx !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TodoInput todos={todos} handleAddTodo={handleAddTodo} />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        activeTab={activeTab}
      />
    </>
  );
};

export default App;
