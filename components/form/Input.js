import React from "react";
import { Input as InputAnt, Typography } from "antd";

const Input = (props) => {
  const { onChange, value, title = "", placeholder = "", type } = props;

  const _onChange = (e) => {
    if (onChange) {
      e.preventDefault();
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex-column pb-2">
      <Typography.Title level={5}>{title}</Typography.Title>
      <InputAnt
        onChange={_onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
