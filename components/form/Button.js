import React from "react";
import style from "@teparuiz69/styles/button.module.css";
import { Button as ButtonAntd } from "antd";
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
    <ButtonAntd
      onClick={onClick}
      type={type}
      size={size}
      icon={icon}
      loading={isLoading}
    >
      <div className="d-flex">
        {name}
      </div>
    </ButtonAntd>
  );
};
