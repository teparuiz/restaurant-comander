import React from "react";
import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const ShipmentsCard = (props) => {
  const { user, total = "$1,000", trash, onEdit } = props;

  return (
    <div className="p-2">
      <Card
        title={user}
        bordered={true}
        actions={[
          <DeleteOutlined key="delete" onClick={() => trash()} />,
          <EditOutlined key="edit" onClick={() => onEdit()} />,
        ]}
      >
        <p>$ {total}</p>
      </Card>
    </div>
  );
};

export default ShipmentsCard;
