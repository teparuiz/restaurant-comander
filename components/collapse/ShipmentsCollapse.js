import React, { useState } from "react";
import Input from "../form/Input";
import { Button } from "../form/Button";
import { useCashCut } from "@teparuiz69/context/cashcut-context";
import ModalShipments from "../modal/Income/ModalShipments";
import ShipmentsCard from "../card/ShipmentsCard";
import { findList } from "@teparuiz69/config/utils";

const ShipmentsCollapse = () => {
  const { getShipments, saveShipments } = useCashCut();

  const [visible, setVisible] = useState({
    visible: false,
    data: false,
  });

  const _onClose = (reload = false) => {
    setVisible({ visible: false, data: false });

    if (reload) {
      let idx = getShipments.map((i) => i.id).indexOf(reload.id);
      if (idx === -1) saveShipments([...getShipments, reload]);
      else
        saveShipments([
          ...getShipments.slice(0, idx),
          reload,
          ...getShipments.slice(idx + 1),
        ]);
    }
  };

  const _trash = (index) => {
    saveShipments([
      ...getShipments.slice(0, index),
      ...getShipments.slice(index + 1),
    ]);
  };

  return (
    <div className="container_table_card">
      <h3>Envios</h3>

      <div className="d-flex">
        {getShipments.map((item, index) => (
          <ShipmentsCard
            user={item.user}
            total={item.total}
            key={index}
            trash={() => _trash(index)}
            onEdit={() => setVisible({ visible: true, data: item })}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <Button
          name="Añadir envio"
          onClick={() => setVisible({ visible: true, data: false })}
        />
      </div>
      <ModalShipments
        visible={visible.visible}
        data={visible.data}
        onClose={_onClose}
      />
    </div>
  );
};

export default ShipmentsCollapse;
