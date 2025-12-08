import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Filters
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Add new task
  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  // Toggle complete
  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, iscompleted: !task.iscompleted } : task
      )
    );
  };

  // Delete task
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Filter and sort tasks
  const filteredTasks = tasks
    .filter((task) => {
      const matchesPriority =
        priorityFilter === "all" || task.priority === priorityFilter;

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "completed" && task.iscompleted) ||
        (statusFilter === "pending" && !task.iscompleted);

      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesPriority && matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      const priorityNum = { High: 3, Medium: 2, Low: 1 };

      // Sort by priority High → Medium → Low
      if (priorityNum[b.priority] !== priorityNum[a.priority]) {
        return priorityNum[b.priority] - priorityNum[a.priority];
      }

      // If same priority, newest first
      return b.id - a.id;
    });

//     const filteredTasks = tasks.filter((task) => {
//   const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;
//   const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
//   return matchesPriority && matchesSearch;
// });

  // Stats
  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.iscompleted).length,
    pending: tasks.filter((t) => !t.iscompleted).length,
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Personal Task Manager</h1>
        <p className="date">{date}</p>
      </header>

      <TaskForm onAddTask={handleAddTask} />

      <FilterBar
        filter={statusFilter}
        priority={priorityFilter}
        search={search}
        stats={stats}
        onFilterChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
        onSearchChange={setSearch}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
