import React, { useState } from "react";
import Input from "@teparuiz69/components/form/Input";
import { Button } from "@teparuiz69/components/form/Button";
import { HTTP } from "../../../config/http";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
const Login = (props) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const _send = () => {
    signIn(
      'credentials', {
        username: username,
        password: password,
        redirect: false,
        callbackUrl: '/',
      
      }
    )     .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col-12">
      <Input name="Usuario" value={username} onChange={setUsername} />

      <Input name="Contraseña" value={password} onChange={setPassword} />
      <Button name="Enviar" onClick={_send} theme="btn btn-secondary" />
    </div>
  );
};

export default Login;
