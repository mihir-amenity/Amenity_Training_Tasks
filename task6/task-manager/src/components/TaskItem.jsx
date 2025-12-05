import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import './TaskItem.css';

function TaskItem({ task, onToggleComplete, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };


  
  return (
    <div className={`task-item ${task.iscompleted ? 'completed' : ''}`}>
      <div className="task-content">
        <button
          onClick={() => onToggleComplete(task.id)}
          className="checkbox-btn"
          aria-label={task.iscompleted ? 'Mark as pending' : 'Mark as completed'}
        >
          {task.iscompleted ? (
            <CheckCircle size={24} className="check-icon checked " />
          ) : (
            <Circle size={24} className="check-icon"  />
          )}
        </button>

        <div className="task-details">
          <div className="task-header">
            <h3 className={`task-title ${task.iscompleted ? 'strikethrough' : ''}`}>
              {task.title}
            </h3>
            <span className={`priority-badge priority-${task.priority}`}>
              {task.priority}
            </span>
          </div>

          {task.description && (
            <p className={`task-description ${task.iscompleted ? 'strikethrough' : ''}`}>
              {task.description}
            </p>
          )}
        </div>

        <button
          onClick={handleDelete}
          className="delete-btn"
          aria-label="Delete task"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;