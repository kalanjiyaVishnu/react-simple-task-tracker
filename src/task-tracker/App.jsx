import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {
  // state for tasks and form
  const [tasks, setTasks] = useState([]);
  const [addstate, setAdd] = useState(false);
  // back-end with json-server
  useEffect(() => {
    const fetch_from_server = async () => {
      const data = await fetch_all();
      setTasks(data);
    };
    fetch_from_server();
  }, []);
  const delete_them_all = () =>{
   
    setTasks([])
    tasks.forEach(
      async(x)=>{
        await fetch(`http://localhost:5000/Tasks/${x.id}`, {
      method: "DELETE"
    });})
  } 
  const fetch_all = async () => {
    const json_data = await fetch("http://localhost:5000/Tasks");

    const data = await json_data.json();
    console.log(data);
    return data;
  };
  const fetch_data = async (id) => {
    const json_data = await fetch(`http://localhost:5000/Tasks/${id}`);

    const data = await json_data.json();
    console.log(data);
    return data;
  };
  // custome methods
  const trigger_rem = async(x, state = "highlight") => {

    const res = await fetch_data(x.id);
    if(res.high_lov){
      state = ''
    }
    res.high_lov = state;
    const up_data_to_server = await fetch(`http://localhost:5000/Tasks/${x.id}`,{
      method:'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(res)
    });
    const final_data = await up_data_to_server.json();
    
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
  const onAdd = async (task) => {
    const updata = { id: Date.now(), ...task };
    const post_data = await fetch(`http://localhost:5000/Tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updata),
    });
    const data = await post_data.json();
    await task.reminder ? setTasks([updata, ...tasks]) : setTasks([...tasks, updata]);
    // await fetch('http://locahhost:5000',{
    //   method : 'PUT',
    //   headers:{
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(tasks)
    // })
  };
  // delete handler for ui
  const delete_task = async (id) => {
    await fetch(`http://localhost:5000/Tasks/${id}`, {
      method: "DELETE"
    });
    setTasks(tasks.filter((x) => x.id !== id));
  };
  return (
    <Router>
      <Header toggle_form={trigger_form} showForm={addstate} delete_them_all={delete_them_all}/>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <div className="container_wraper_border">
              <div className="container">
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
            <Footer />
          </>
        )}
      ></Route>

      <Route path="/about" component={About}></Route>
    </Router>
  );
};
export default App;
