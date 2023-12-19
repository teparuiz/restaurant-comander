import React from "react";
import { Select as SelectAntd, Space, Typography } from "antd";

const Select = (props) => {
  const { name = "", options, onChange, value } = props;

  const _onChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex-column pb-2">
      <Typography.Title level={5}>{name}</Typography.Title>
      <SelectAntd
        style={{
          width: "100%",
        }}
        onChange={_onChange}
        value={value}
        options={[{ label: "Selecciona una opción", value: "-1" }, ...options]}
      />
    </div>
  );
};

export default Select;
