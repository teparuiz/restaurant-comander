import React from "react";
import { Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const IncomeCard = (props) => {
  const { description = "", total = "$1,000", trash, onEdit } = props;

  return (
    <div className="p-2">
      <Card
        title={description}
        bordered={true}
        actions={[
          <DeleteOutlined key="delete" onClick={() => trash()} />,
          <EditOutlined key="edit" onClick={() => onEdit()} />,
        ]}
      >
        <p>{total}</p>
      </Card>
    </div>
  );
};

export default IncomeCard;
