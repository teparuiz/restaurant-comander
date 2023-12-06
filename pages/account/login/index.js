import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Title } = Typography;
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";

const LoginForm = () => {
  const router = useRouter();

  const onFinish = async (values) => {
    const username = values.username;
    const password = values.password;
    signIn("credentials", {
      username,
      password,
      redirect: false,
    }).then((response) => {

      console.log(response)
      if (response.error) {
        console.log("ocurrio un error");
      } else if (response?.url) {
        router.push(response?.url);
      }
    });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Handle password recovery logic here");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Handle registration logic here");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: 500 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Title level={2}> WIP Burgers </Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: false }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Recuérdame</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Inicia sesión
            </Button>
            {/* <a href="" onClick={handleRegister}>
              Registrarme
            </a> */}
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
