import React from "react";
import style from "@teparuiz69/styles/button.module.css";
import { Button as ButtonAntd, Space } from "antd";
export const Button = (props) => {
  const {
    name = "",
    onClick,
    theme = "",
    icon,
    type = "primary",
    size = "large",
    isLoading = false,
  } = props;

  return (
    <Space>
      <ButtonAntd
        onClick={onClick}
        type={type}
        size={size}
        icon={icon}
        loading={isLoading}
      >
        <div className="container align-items-center">
          <div className="d-flex col">{name}</div>
          <i className="material-icons">{icon}</i>
        </div>
      </ButtonAntd>
    </Space>
  );
};
