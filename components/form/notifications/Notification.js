import React from "react";
import { notification } from "antd";

const Notification = (props) => {
  const { message, description, type } = props;
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  // Call the function here, not inside JSX
  openNotificationWithIcon(type);

  return <div>{contextHolder}</div>;
};

export default Notification;
