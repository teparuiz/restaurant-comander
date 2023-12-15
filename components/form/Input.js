import React from "react";
import { Input as InputAnt, Typography } from "antd";

const Input = (props) => {
  const { onChange, value, title = "", placeholder = "" } = props;

  const _onChange = (e) => {
    if (onChange) {
      e.preventDefault();
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex-column">
      <Typography.Title level={5}>{title}</Typography.Title>
      <InputAnt onChange={_onChange} value={value} placeholder={placeholder} />
    </div>
  );
};

export default Input;
