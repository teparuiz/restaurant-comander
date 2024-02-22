import React from "react";
import { Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const ExpenseCard = (props) => {
  const { description = "", provider, total = "$1,000", trash, onEdit } = props;

  return (
    <div className=" p-2">
      <Card
        title={provider}
        bordered={true}
        actions={[
          <DeleteOutlined key="delete" onClick={() => trash()} />,
          <EditOutlined key="edit" onClick={() => onEdit()} />,
        ]}
      >
        <p>
          <b>{description}</b>
        </p>
        <p>$ {total}</p>
      </Card>
    </div>
  );
};

export default ExpenseCard;
