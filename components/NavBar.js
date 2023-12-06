import React from "react";
import { Layout } from "antd";
import MenuComponent from "./Menu";

const { Sider } = Layout;

const NavBar = (props) => {
  const { collapsed = false } = props;
  return (
    <Sider collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <MenuComponent />
    </Sider>
  );
};

export default NavBar;
