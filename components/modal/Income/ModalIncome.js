import React, { useEffect, useState } from "react";
import { Button, Drawer, Space } from "antd";
import Input from "@teparuiz69/components/form/Input";
import Select from "@teparuiz69/components/form/Select";
import { v4 as uuidv4 } from "uuid";
import { payMethod } from "@teparuiz69/config/const";

const ModalIncome = (props) => {
  const { visible = false, onClose } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState("-1");
  const [total, setTotal] = useState(0);

  const _onClose = (reload = false) => {
    setTimeout(() => {
      if (onClose) onClose(reload);
    }, 300);
  };

  useEffect(() => {
    if (visible && props.data) {
      setDescription(props.data.description);
      setTotal(props.data.total);
      setIsEdit(true);
    } else if (visible) {
      setIsEdit(false);
      setTotal(0);
      setDescription("-1");
    }
  }, [props.data, visible]);

  const _save = () => {
    const obj = {
      id: isEdit ? props.data.id : uuidv4(),
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
