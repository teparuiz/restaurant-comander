import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import Input from "@teparuiz69/components/form/Input";
import Select from "@teparuiz69/components/form/Select";

const ModalIncome = (props) => {
  const { visible = false, onClose } = props;
  const [description, setDescription] = useState("-1");
  const [total, setTotal] = useState(0);

  const _onClose = () => {
    if (onClose) onClose();
  };

  return (
    <Drawer
      title="Añadir ingreso"
      onClose={() => _onClose(false)}
      open={visible}
    >
      <Select
        name="Seleccione una cuenta"
        value={description}
        onChange={setDescription}
        options={[
          { label: "Efectivo", value: 1 },
          { label: "Tarjeta", value: 2 },
        ]}
      />
      <Input title="Total" value={total} onChange={setTotal} />
      <div className="divider"></div>
      <div className="d-flex justify-content-between">
        <Space>
          <Button onClick={() => _onClose(false)}>Cancelar</Button>
        </Space>

        <Space>
          <Button type="primary">Guardar</Button>
        </Space>
      </div>
    </Drawer>
  );
};

export default ModalIncome;
