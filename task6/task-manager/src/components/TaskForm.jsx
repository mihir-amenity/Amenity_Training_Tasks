import React, { useEffect } from 'react'
import { useState } from 'react';

import './TaskForm.css'
function TaskForm({onAddTask}) {




   const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [tasks,setTasks]=useState([]);
    const handleSubmit=(e)=>{
          e.preventDefault();

          const task={
           id:Date.now(),
           title:title,
           description:description,
           priority:priority,
           iscompleted:false,
          }
        
         onAddTask(task)
          
setTitle(" ");
setDescription(" ");
setPriority("medium");
    }   

    
   
     const handleTitleChange=(e)=>{
         setTitle(e.target.value)
     }
     const  handleDescriptionChange=(e)=>{
        setDescription(e.target.value)
     }
     const handlePriorityChange=(e)=>{
        setPriority(e.target.value)
     }
    
   
    

  return (
 
  <form className="task-form" onSubmit={handleSubmit}>
  <h2 className="form-title">Create New Task</h2>

  <label className="form-label">Task Title</label>
  <input
    type="text"
    className="form-input"
    placeholder="Enter task title"
    value={title}
    onChange={handleTitleChange}
    required
  />

  <label className="form-label">Description</label>
  <textarea
    className="form-textarea"
    placeholder="Enter task description"
    value={description}
    onChange={handleDescriptionChange}
    required
  />

  <label className="form-label">Priority</label>
  <select
    value={priority}
    onChange={handlePriorityChange}
    className="form-select"
  >
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>

  <button type="submit" className="submit-btn">
    Add Task
  </button>
</form>

  )
}

export default TaskForm
