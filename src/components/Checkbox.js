import React from 'react';

function Checkbox({ label, isChecked, onToggle }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onToggle(label)}
        />
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
