// prioritySelector.jsx
import React from "react";

function PrioritySelector({ selectedPriority, onPriorityChange }) {
  return (
    <div>
      <label>Priority: </label>
      <select
        value={selectedPriority}
        onChange={(e) => onPriorityChange(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

export default PrioritySelector;
