import React from "react";
import { useState } from "react";
const Task = ({ Task, trigger_rem, love_it, onDelete }) => {
  const getClass = () => {
    if (Task.high_lov === "love") {
      return "task_container border-love";
    } else {
      if (Task.high_lov === "highlight") {
        return "task_container border-left";
      } else {
        return "task_container";
      }
    }
  };
  const [active, setactive] = useState(false);
  return (
    <div
      className={getClass()}
      onDoubleClick={() => {
        if (active) {
          trigger_rem(Task, "");
          setactive(false);
        } else {
          trigger_rem(Task, "highlight");
          setactive(true);
        }
      }}
    >
      <div className="task-text">
        <span className="highlight">{Task.head}</span>
        <p>{Task.body}</p>
      </div>
      <span className="icon_holdr">
        <button
          className="btn_reset btn-icons"
          onClick={() => {
            onDelete(Task.id);
          }}
        >
          💀
        </button>
        <button
          className={
            Task.high_lov === "love"
              ? "btn_reset btn-icons"
              : "btn_reset btn-icons btn-icons_grayer"
          }
          onClick={() => {
            love_it(Task);
          }}
        >
          ❤
        </button>
      </span>
    </div>
  );
};
export default Task;
