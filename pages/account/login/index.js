import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Title } = Typography;

const LoginForm = () => {
  const onFinish = (values) => {
    console.log(values);
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
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Por favor ingresa tu usuario" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor ingresa tu contraseña" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
            <a
              style={{ float: "right" }}
              className="login-form-forgot"
              href=""
              onClick={handleForgotPassword}
            >
              ¿Olvidaste la contraseña?
            </a>
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
