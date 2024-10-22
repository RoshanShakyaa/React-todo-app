import React from "react";

const Tabs = ({ todos, setActiveTab, activeTab }) => {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        return (
          <button
            className={"tab-button" + (tab === activeTab ? "tab-selected" : "")}
            onClick={() => setActiveTab(tab)}
            key={tabIndex}
          >
            {tab} <span> ({numOfTasks})</span>
          </button>
        );
      })}
      <hr />
    </nav>
  );
};

export default Tabs;
