import React from "react";
import { CheckCircle, Circle, Trash2 } from "lucide-react";
import "./TaskItem.css";

function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <div className={`task-item ${task.iscompleted ? "completed" : ""}`}>
      
      <button
        onClick={() => onToggleComplete(task.id)}
        className="task-btn complete-btn"
      >
        {task.iscompleted ? <CheckCircle /> : <Circle />}
      </button>

    
      <div className="task-content">
        <h3 className={task.iscompleted ? "strikethrough" : ""}>
          {task.title}
        </h3>
        <p className={task.iscompleted ? "strikethrough" : ""}>
          {task.description}
        </p>
        <span className={`priority-badge ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

     
      <button onClick={() => onDelete(task.id)} className="task-btn delete-btn">
        <Trash2 />
      </button>
    </div>
  );
}

export default TaskItem;
