"use client";
import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useRouter } from "next/navigation";

const MenuComponent = (props) => {
  const { collapse } = props;
  const router = useRouter();

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Inicio",
      path: "/",
    },
    {
      key: "2",
      icon: <MoneyCollectOutlined />,
      label: "Corte de caja",
      path: "/cashcut",
    },
    // {
    //   key: "3",
    //   icon: <SettingOutlined />,
    //   label: "Configuración",
    //   path: "/settings",
    // },
  ];

  const handleMenuClick = (value) => {
    return router.push(items[value.key - 1]?.path);
  };
  return (
    <div>
      <Menu
        theme="dark"
        mode="inline"
        onClick={handleMenuClick}
      >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default MenuComponent;
