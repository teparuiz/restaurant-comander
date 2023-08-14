import React, { useState } from "react";
import Input from "@teparuiz69/components/Input";
import { Button } from "@teparuiz69/components/Button";
import { useOrder } from "../../context/orders-context";
const Orders = (props) => {
  const { getOrder, saveOrder } = useOrder();
  const [hamburguer, setHamburguer] = useState("");
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState(1);

  const _send = () => {
    const obj = {
      hamburguer,
      description,
      order,
    };
    saveOrder(obj);
  };

  return (
    <div>
      <form>
        <Input
          name="Nombre producto"
          value={hamburguer}
          onChange={setHamburguer}
          type="text"
        />
        <Input
          name="Descripción"
          value={description}
          onChange={setDescription}
          type="text"
        />
        <Input name="" value={order} onChange={setOrder} type="number" />
      </form>
      <Button name="Realizar orden" onClick={_send} />
    </div>
  );
};

export default Orders;
