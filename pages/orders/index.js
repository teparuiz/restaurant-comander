import React, { useState } from "react";
import Input from "@teparuiz69/components/Input";
import { Button } from "@teparuiz69/components/Button";
import { useOrder } from "../../context/orders-context";
import { useRouter } from "next/router";
import Select from "@teparuiz69/components/Select";
import { burguers } from "@teparuiz69/config/const";
import { Button as ButtonAntd, Space } from "antd";
const Orders = (props) => {
  const { getOrder, saveOrder } = useOrder();
  const router = useRouter();
  const [burguer, setBurguer] = useState("");
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState(parseFloat(1));

  const _send = () => {
    const obj = {
      burguer,
      notes,
      quantity,
    };
    onClose(obj);
  };

  const onClose = (reload) => {
    if (reload) {
      saveOrder([...getOrder, reload]);
      setBurguer("-1");
      setNotes("");
      setQuantity(1);
    }
  };

  const _goList = () => {
    router.push("/list");
  };

  const _add = (amount) => {
    const newAmount = quantity + amount;
    setQuantity(newAmount);
  };

  return (
    <div className="container">
      <h1> Hacer pédido </h1>
      <div className="text-center">
        <div className="row d-flex mt-8 row align-items-center justify-content-center">
          <div className="flex flex-col mb-2">
            <div className="flex relative">
              <Select
                name="Producto"
                value={burguer}
                onChange={setBurguer}
                options={[
                  {
                    name: "Selecciona una opción",
                    value: -1,
                    disabled: true,
                  },
                  ...burguers,
                ]}
              />
              <Input
                name="Notas"
                value={notes}
                onChange={setNotes}
                placeholder="escribe excepciones del pedido"
                type="text"
              />

              <Space wrap>
                <ButtonAntd onClick={() => _add(-1)} disabled={quantity <= 0}>
                  <i className="material-icons">remove</i>
                </ButtonAntd>

                <Input name="" value={quantity} onChange={setQuantity} />
                <ButtonAntd onClick={() => _add(1)}>
                  <i className="material-icons">add</i>
                </ButtonAntd>
              </Space>
            </div>
          </div>

          <div className="row">
            <div className="col col-6">
              <div className="d-flex justify-content-between">
                <Button
                  name="Añadir producto "
                  theme="btn btn-primary"
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
    </div>
  );
};

export default Orders;
