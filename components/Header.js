import React from "react";
import { signOut } from "next-auth/client";

import { Layout, Button, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = (props) => {
  const { collapsed = false, colorBgContainer, onCollapsed } = props;
  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
        <div className="d-flex justify-content-between align-items-center">
          <Avatar
            className="avatar"
            style={{
              fontSize: "20px",
              marginRight: "20px",
            }}
            size={40}
          >{`${props.user.firstName[0]}${props.user.lastName[0]}`}</Avatar>

          <Button icon={<LogoutOutlined />} onClick={() => signOut()}>
            Salir
          </Button>
        </div>
      </Header>
    </div>
  );
};

export default HeaderComponent;
