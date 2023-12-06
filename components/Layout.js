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
import { useRouter } from "next/navigation";
import MenuComponent from "./Menu";
import NavBar from "./NavBar";
import HeaderComponent from "./Header";
import Footer from "./Footer";

const { Header, Sider, Content } = Layout;

const LayoutComponent = (props) => {
  const { children } = props;
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <NavBar collapsed={collapsed} />
      <Layout>
        <HeaderComponent
          {...props}
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
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
