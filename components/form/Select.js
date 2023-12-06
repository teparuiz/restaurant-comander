import React from "react";

const Select = (props) => {
  const { name = "", options, onChange, value } = props;

  const _onChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <label>{name}</label>
      <select value={value} onChange={_onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
