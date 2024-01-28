import React, { useEffect, useState } from "react";
import { Button, Drawer, Space } from "antd";
import Input from "@teparuiz69/components/form/Input";
import Select from "@teparuiz69/components/form/Select";
import { v4 as uuidv4 } from "uuid";
import { payMethod } from "@teparuiz69/config/const";

const ModalShipments = (props) => {
  const { visible = false, onClose } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState("");

  const _onClose = (reload = false) => {
    setTimeout(() => {
      if (onClose) onClose(reload);
    }, 300);
  };

  useEffect(() => {
    if (visible && props.data) {
      setTotal(props.data.total);
      setUser(props.data.user);
      setIsEdit(true);
    } else if (visible) {
      setIsEdit(false);
      setTotal(0);

      setUser("");
    }
  }, [props.data, visible]);

  const _save = () => {
    const obj = {
      id: isEdit ? props.data.id : uuidv4(),
      total: total,
      user: user,
    };

    _onClose(obj);
  };

  return (
    <Drawer
      title="Añadir envios"
      onClose={() => _onClose(false)}
      open={visible}
    >
      {/* //!! proveedores tendra que ser un catalago que pueda anadirse para que sea un select and search */}
      <Input
        title="Usuario"
        placeholder="Ingresa el usuario quien hizo el envio"
        value={user}
        onChange={setUser}
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

export default ModalShipments;
