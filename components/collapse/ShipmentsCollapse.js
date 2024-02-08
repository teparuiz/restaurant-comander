import React, { useState } from "react";
import Input from "../form/Input";
import { Button } from "../form/Button";
import { useCashCut } from "@teparuiz69/context/cashcut-context";

const ShipmentsCollapse = () => {
  const [user, setUser] = useState("");
  const [totalShiptment, setTotalShiptment] = useState("");
  const { getShipments, saveShipments } = useCashCut();
  const save = () => {
    const obj = { user, totalShiptment };

    saveShipments(obj);
  };

  console.log(getShipments);

  return (
    <div>
      <h5>Envios</h5>
      <form>
        <Input
          title="Repartidor"
          placeholder="Ingresa quien realizo el envió"
          onChange={setUser}
          value={user}
        />
        <Input
          title="Total del envió"
          placeholder="Ingresa el total del envio"
          onChange={setTotalShiptment}
          value={totalShiptment}
        />
      </form>
      <Button name="Guardar" onClick={save} />
    </div>
  );
};

export default ShipmentsCollapse;
