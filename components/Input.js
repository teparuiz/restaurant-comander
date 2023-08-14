import React from "react";

const Input = (props) => {
  const { name = "", onChange, value, type } = props;

  const _onChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label> {name}
      <input type={type} value={value} onChange={_onChange} />
      </label>
    </div>
  );
};

export default Input;
