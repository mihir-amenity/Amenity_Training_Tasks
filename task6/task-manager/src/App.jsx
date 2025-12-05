import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTask(savedTasks);
    }
  }, []);

  const [priority, setPriority] = useState("medium");
  const [filter, setFilter] = useState("pending"); 
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddtask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const handleComplete = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, iscompleted:!task.iscompleted } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTask((prev) => prev.filter((task) => task.id !== taskId));
  };

//filter all prioritywise then task completed wise ans search filter implemented 
  const filterTasks = tasks.filter((task) => {
    const matchesPriority =
      priority === "medium" || task.priority === priority;

    const matchesStatus =
      (filter === "completed" && task.iscompleted) ||
      (filter === "pending" && !task.iscompleted) 

    const matchesSearch = task.title.toLowerCase().includes(search);

    return matchesPriority && matchesStatus && matchesSearch;
  });
//this are for the stats
  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.iscompleted).length,
    pending: tasks.filter((t) => !t.iscompleted).length,
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
       <h1>Personal Task Manager</h1>
          <p className="date">{date}</p>
      </div>
      </header>
       
      {/*  taksform stubmit passed using props */}
      <TaskForm onAddTask={handleAddtask} />
{/* filter bar passed using props */}
      <FilterBar
        filter={filter}
        priority={priority}
        search={search}
        stats={stats}
        onFilterChange={setFilter}
        onPriorityChange={setPriority}
        onSearchChange={setSearch}
      />
   {/* ALL task passes here andonCpmpletr and onDelete function pass here  */}
      <TaskList
        tasks={filterTasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
