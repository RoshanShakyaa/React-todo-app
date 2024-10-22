import React from "react";

const Header = ({ todos }) => {
  const taskLength = todos.length;
  const isTaskPular = todos.length > 1;
  const taskOrTasks = isTaskPular ? "tasks" : "task";
  return (
    <div>
      <h1>
        Your have {taskLength} open {taskOrTasks}
      </h1>
    </div>
  );
};

export default Header;
