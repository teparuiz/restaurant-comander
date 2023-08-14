import React from "react";

const Input = (props) => {
  const {
    name = "",
    onChange,
    value,
    type,
    placeholder = "",
    className = "form-control me-2",
  } = props;

  const _onChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-3">
      <label>
        {name}
        <input
          className={className}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={_onChange}
        />
      </label>
    </div>
  );
};

export default Input;
