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

  console.log(getOrder);

  const onClose = (reload) => {
    if (reload) saveOrder([...getOrder, reload]);
  };

  const _goList = () => {
    router.push("/list");
  };

  const _add = (amount) => {
    const newAmount = quantity + amount;
    setQuantity(newAmount);
  };

  return (
    <div>
      <div className="container-fluid h-custom justify-content-center">
        <div className="row">
          <div className="col-6">
            <Select
              name="Producto"
              value={burguer}
              onChange={setBurguer}
              options={[
                { name: "Selecciona una opción", value: -1, disabled: true },
                ...burguers,
              ]}
            />
            <Input
              name="Descripción"
              value={description}
              onChange={setDescription}
              placeholder="escribe excepciones del pedido"
              type="text"
            />
            <button onClick={() => _add(-1)} disabled={quantity <= 0}>
              <i className="material-icons">remove</i>
            </button>

            <Input
              name=""
              value={quantity}
              onChange={setQuantity}
              type="number"
            />
            <button onClick={() => _add(1)}>
              <i className="material-icons">add</i>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col col-6">
            <div className="d-flex justify-content-between">
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
    </div>
  );
};

export default Orders;
