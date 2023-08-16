import React, { useState } from "react";
import Input from "@teparuiz69/components/Input";
import { Button } from "@teparuiz69/components/Button";
const Register = (props) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _send = () => {
    alert('Hola')
  }
  return (
    <div className="col-12">
      <Input name="Nombre" value={name} onChange={setName} />
      <Input name="Usuario" value={userName} onChange={setUserName} />
      <Input name="Correo" value={email} onChange={setEmail} />
      <Input name="Contraseña" value={password} onChange={setPassword} />
      <Button name="Enviar" onClick={_send} theme="btn btn-secondary"/>
    </div>
  );
};

export default Register;
