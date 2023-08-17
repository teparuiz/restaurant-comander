import React, { useState } from "react";
import Input from "@teparuiz69/components/Input";
import { Button } from "@teparuiz69/components/Button";
import { HTTP } from "../../../config/http";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const _send = () => {
    HTTP("POST", "/login", {
      username,
      password,
    })
      .then((response) => {
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
