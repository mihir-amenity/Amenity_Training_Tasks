import React from "react";

function FilterBar({
  filter,
  priority,
  search,
  stats,
  onFilterChange,
  onPriorityChange,
  onSearchChange
}) {
  return (
    <div className="task-list-container">

      
      <div className="search-section">
        <i className="search-icon">🔍</i>
        <input
          className="search-input"
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
        />


        <select
          className="status-btn"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        
        </select>

      
        <select
          className="status-btn"
          value={priority}
          onChange={(e) => onPriorityChange(e.target.value)}
        >
          <option value="medium">Medium (default)</option>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
      </div>

    
      <div className="task-stats">
        <p>Total: {stats.total}</p>
        <p>Completed: {stats.completed}</p>
        <p>Pending: {stats.pending}</p>
      </div>
    </div>
  );
}

export default FilterBar;
