import React, { useState } from "react";
import Input from "@teparuiz69/components/Input";
import { Button } from "@teparuiz69/components/Button";
import { HTTP } from "../../../config/http";
const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useState("");

  const _send = () => {
    const obj = {
      firstName,
      lastName,
      email,
      password,
      username,
      role,
      age: parseFloat(age),
    };
    HTTP("POST", "/signup", obj)
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col-12">
      <Input name="Nombre" value={firstName} onChange={setFirstName} />
      <Input name="Apellido" value={lastName} onChange={setLastName} />
      <Input name="Usuario" value={username} onChange={setUsername} />
      <Input name="Correo" value={email} onChange={setEmail} />
      <Input
        name="Contraseña"
        value={password}
        onChange={setPassword}
        type="password"
      />
      <Input name="Rol" value={role} onChange={setRole} />
      <Input name="Edad" value={age} onChange={setAge} type="number" />
      <Button name="Enviar" onClick={_send} theme="btn btn-secondary" />
    </div>
  );
};

export default Register;
