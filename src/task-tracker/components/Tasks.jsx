import React from "react";
import Task from "./Task";
const Tasks = ({ tasks, trigger_rem ,love_it , onDelete}) => {
  // console.log(tasks);
  return (
    <div className="tasks-container" key="top-level-container">
      {tasks.map((task) => (
        <Task onDelete={onDelete} Task={task} trigger_rem={trigger_rem} key={task.id} love_it={love_it}/>
      ))}
    </div>
  );
};
export default Tasks;
