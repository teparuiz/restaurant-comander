// LayoutComponent.js
"use client";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useRouter } from 'next/navigation'
import MenuComponent from "./Menu";
import NavBar from "./NavBar";
import HeaderComponent from "./Header";

const { Header, Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <main className="flex min-h-screen">
      <Layout>
        <NavBar collapsed={collapsed} />
        <Layout>
          <HeaderComponent
            collapsed={collapsed}
            onCollapsed={setCollapsed}
            colorBgContainer={colorBgContainer}
          />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </main>
  );
};

export default LayoutComponent;
