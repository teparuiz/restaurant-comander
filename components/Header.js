import React from "react";

import { Layout, Button, Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = (props) => {
  const { collapsed = false, colorBgContainer, onCollapsed } = props;
  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => onCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />

        <Avatar
          className="avatar"
          style={{
            fontSize: "16px",
            justifyContent: 'flex-end'
          }}
          size={26}
        >{`${props.user.firstName[0]}${props.user.lastName[0]}`}</Avatar>
      </Header>
    </div>
  );
};

export default HeaderComponent;
