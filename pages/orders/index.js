import React, { useState } from "react";
import Input from "@teparuiz69/components/Input";
import { Button } from "@teparuiz69/components/Button";
import { useOrder } from "../../context/orders-context";
import { useRouter } from "next/router";
const Orders = (props) => {
  const { getOrder, saveOrder } = useOrder();
  const router = useRouter();
  const [hamburguer, setHamburguer] = useState("");
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState(1);

  const _send = () => {
    const obj = {
      hamburguer,
      description,
      order,
    };
    onClose(obj);
  };

  const onClose = (reload) => {
    if (reload) saveOrder([...getOrder, reload]);
  };

  const _goList = () => {
    router.push("/list");
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-2">
        <div className="col-6">
          <Input
            name="Nombre producto"
            value={hamburguer}
            onChange={setHamburguer}
            type="text"
            placeholder="escribe el nombre del producto"
          />
          <Input
            name="Descripción"
            value={description}
            onChange={setDescription}
            placeholder="escribe excepciones del pedido"
            type="text"
          />
          <Input name="" value={order} onChange={setOrder} type="number" />

          <Button
            name="Realizar orden"
            className="btn btn-secondary"
            onClick={_send}
            icon="arrow_forward"
          />
          <Button
            name="Ver lista"
            className="btn btn-secondary"
            onClick={_goList}
            icon="arrow_forward"
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
