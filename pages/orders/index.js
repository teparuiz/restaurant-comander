import React, { useState } from "react";
import Input from "@teparuiz69/components/Input";
import { Button } from "@teparuiz69/components/Button";
import { useOrder } from "../../context/orders-context";
import { useRouter } from "next/router";
import Select from "@teparuiz69/components/Select";
import { burguers } from "@teparuiz69/config/const";
const Orders = (props) => {
  const { getOrder, saveOrder } = useOrder();
  const router = useRouter();
  const [burguer, setBurguer] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const _send = () => {
    const obj = {
      burguer,
      description,
      quantity,
    };
    onClose(obj);
  };

  console.log(getOrder)

  const onClose = (reload) => {
    if (reload) saveOrder([...getOrder, reload]);
  };

  const _goList = () => {
    router.push("/list");
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center mb-2">
          <div className="col-6">
            <Select
              name="Producto"
              value={burguer}
              onChange={setBurguer}
              options={[
                { name: "Selecciona una opción", value: -1, disabled: true }, ...burguers
              ]}
            />
            <Input
              name="Descripción"
              value={description}
              onChange={setDescription}
              placeholder="escribe excepciones del pedido"
              type="text"
            />
            <Input name="" value={quantity} onChange={setQuantity} type="number" />

            <Button
              name="Realizar orden"
              theme="btn btn-secondary"
              onClick={_send}
              icon="arrow_forward"
            />
            <Button
              name="Ver lista"
              theme="btn btn-secondary"
              onClick={_goList}
              icon="arrow_forward"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
