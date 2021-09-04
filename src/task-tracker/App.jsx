import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () => {
  // state for tasks and form
  const [tasks, setTasks] = useState([
    {
      id: 1,
      head: "eat",
      body: "buy the pizza and eat",
      high_lov: "",
    },
    {
      id: 2,
      head: "hospital",
      body: "for the checkup",
      high_lov: "",
    },
  ]);
  const [addstate, setAdd] = useState(false);

  // custome methods
  const trigger_rem = (x, state = "highlight") => {
    if (x.high_lov) {
      setTasks(
        tasks.map((task) =>
          task.id === x.id ? { ...task, high_lov: "" } : task
        )
      );
    } else {
      if (state === "love") {
        setTasks(
          tasks.map((task) =>
            task.id === x.id ? { ...task, high_lov: "love" } : task
          )
        );
      } else {
        if (state === "highlight") {
          setTasks(
            tasks.map((task) =>
              task.id === x.id ? { ...task, high_lov: "highlight" } : task
            )
          );
          console.log("triggered high light " + state);
        } else {
          setTasks(
            tasks.map((task) =>
              task.id === x.id ? { ...task, high_lov: "" } : task
            )
          );
          console.log("removed highlight" + state);
        }
      }
    }
  };
  // highlight/love the task
  const love_it = (task) => {
    trigger_rem(task, "love");
  };
  // trigger_form();
  const trigger_form = () => {
    addstate ? setAdd(false) : setAdd(true);
  };

  // form submission
  const onAdd = (task) => {
    setTasks([{ ...task, id: Date.now() }, ...tasks]);
  };
  // delete handler for ui
  const delete_task = (id) => {
    setTasks(tasks.filter((x) => x.id !== id));
  };
  return (
    <div className="container_wraper_border">
      <div className="container">
        <Header toggle_form={trigger_form} showForm={addstate} />
        {addstate && <AddTask onAdd={onAdd} />}
        <Tasks
          tasks={tasks}
          trigger_rem={trigger_rem}
          love_it={love_it}
          onDelete={delete_task}
        />
      </div>
      <p className="info"></p>
    </div>
  );
};
export default App;
