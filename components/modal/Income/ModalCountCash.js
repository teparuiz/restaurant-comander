import React, { useEffect, useState } from "react";
import { Button, Drawer, Space } from "antd";
import Input from "@teparuiz69/components/form/Input";
import Select from "@teparuiz69/components/form/Select";
import { v4 as uuidv4 } from "uuid";
import { payMethod } from "@teparuiz69/config/const";

const ModalCountCash = (props) => {
  const { visible = false, onClose } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);
  const [provider, setProvider] = useState("");

  const _onClose = (reload = false) => {
    setTimeout(() => {
      if (onClose) onClose(reload);
    }, 300);
  };

  useEffect(() => {
    if (visible && props.data) {
      setDescription(props.data.description);
      setTotal(props.data.total);
      setProvider(props.data.provider);
      setIsEdit(true);
    } else if (visible) {
      setIsEdit(false);
      setTotal(0);
      setDescription("");
      setProvider("");
    }
  }, [props.data, visible]);

  const _save = () => {
    const obj = {
      id: isEdit ? props.data.id : uuidv4(),
      description: description,
      total: total,
      provider: provider,
    };

    _onClose(obj);
  };

  return (
    <Drawer
      title="Añadir egreso"
      onClose={() => _onClose(false)}
      open={visible}
    >
      <h4>Billetes</h4>
      <Input
        title="500"
        placeholder="Ingresa los billetes de 500"
        value={provider}
        onChange={setProvider}
      />
      <Input
        title="200"
        placeholder="Ingresa los billetes de 200"
        value={description}
        onChange={setDescription}
      />
      <Input
        title="100"
        value={total}
        onChange={setTotal}
        placeholder="Ingresa los billetes de 100"
      />
        <Input
        title="50"
        value={total}
        onChange={setTotal}
        placeholder="Ingresa los billetes de 100"
      />
        <Input
        title="20"
        value={total}
        onChange={setTotal}
        placeholder="Ingresa los billetes de 100"
      />
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

export default ModalCountCash;
