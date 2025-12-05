import React, { useEffect, useState } from 'react'
import { Search, CheckCircle, Clock, Trash2 } from 'lucide-react';
import './TaskList.css'
import TaskItem from './TaskItem';
function TaskList({tasks,onComplete,onDelete}) {

  return (
    

    <div className="task-list-container">
   {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onComplete}
          onDelete={onDelete}
        />
      ))}

</div>

  )
}

export default TaskList;


