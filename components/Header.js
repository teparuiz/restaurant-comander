import React from 'react'

import { Layout, Button } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header } = Layout

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
        </Header>
      </div>
    );
}

export default HeaderComponent