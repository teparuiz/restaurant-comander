import React, { useState } from "react";
import Input from "@teparuiz69/components/form/Input";
import { Button } from "@teparuiz69/components/form/Button";
import { HTTP } from "../../../config/http";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Layout, Menu, Row, Col, Typography, Form, Switch } from "antd";
const Login = (props) => {
  const router = useRouter();
  const { Title } = Typography;
  const { Header, Footer, Content } = Layout;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const _send = () => {
    signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
      callbackUrl: "/",
    })
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout className="layout-default layout-signin">
      <Content className="signin">
        <Row gutter={[24, 0]} justify="space-around">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 6, offset: 2 }}
            md={{ span: 12 }}
          >
            <Title className="mb-15">Sign In</Title>
            <Title className="font-regular text-muted" level={5}>
              Enter your email and password to sign in
            </Title>
            <Input name="Usuario" value={username} onChange={setUsername} />

            <Input name="Contraseña" value={password} onChange={setPassword} />
            <Button name="Enviar" onClick={_send} theme="btn btn-secondary" />
          </Col>
          <Col
            className="sign-img"
            style={{ padding: 12 }}
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
          ></Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
