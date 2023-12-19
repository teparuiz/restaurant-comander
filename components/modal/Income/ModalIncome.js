import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import Input from "@teparuiz69/components/form/Input";
import Select from "@teparuiz69/components/form/Select";
import { v4 as uuidv4 } from "uuid";
import { payMethod } from "@teparuiz69/config/const";

const ModalIncome = (props) => {
  const { visible = false, onClose } = props;
  const [description, setDescription] = useState("-1");
  const [total, setTotal] = useState(0);

  const _onClose = (reload = false) => {
    if (onClose) onClose(reload);
  };

  const _save = () => {
    const obj = {
      id: uuidv4(),
      description: description,
      total: total,
    };

    _onClose(obj);
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
        options={[...payMethod]}
      />
      <Input title="Total" value={total} onChange={setTotal} />
      <div className="divider"></div>
      <div className="d-flex justify-content-between">
        <Space>
          <Button onClick={() => _onClose(false)}>Cancelar</Button>
        </Space>

        <Space>
          <Button type="primary" onClick={_save}>
            Guardar
          </Button>
        </Space>
      </div>
    </Drawer>
  );
};

export default ModalIncome;
