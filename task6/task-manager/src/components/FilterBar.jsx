import React from "react";
import "./FilterBar.css";

function FilterBar({ filter, priority, search, stats, onFilterChange, onPriorityChange, onSearchChange }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search task..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <select value={priority} onChange={(e) => onPriorityChange(e.target.value)}>
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <div className="stats">
        <p>Total: {stats.total}</p>
        <p>Completed: {stats.completed}</p>
        <p>Pending: {stats.pending}</p>
      </div>
    </div>
  );
}

export default FilterBar;
