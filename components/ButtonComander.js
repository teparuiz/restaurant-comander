import React from "react";
import { Button, Space } from "antd";
const ButtonComander = (props) => {
  const { name = "", onClick, icon = "" } = props;

  return (
    <Space wrap>
      <Button
        type="primary"
        onClick={onClick}
        className="container"
        size="large"
      >
        <div className="container align-items-center">
          <i className="material-icons">{icon}</i>
        </div>
      </Button>
     <div className="d-flex col">
     {name}
     </div>
    </Space>
  );
};

export default ButtonComander;
