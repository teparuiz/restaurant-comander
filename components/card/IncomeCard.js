import React from "react";
import { Card, Col, Row } from "antd";

const IncomeCard = (props) => {
  const { description = "", total = "$1,000" } = props;

  return (
    <div className="p-2">
      <Card title={description} bordered={true}>
        <p>{total}</p>
      </Card>
    </div>
  );
};

export default IncomeCard;
