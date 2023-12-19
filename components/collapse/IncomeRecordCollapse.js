import React, { useState } from "react";
import Input from "../form/Input";
import { Button } from "antd";
import IncomeCard from "../card/IncomeCard";
import ModalIncome from "../modal/Income/ModalIncome";

const IncomeRecordCollapse = () => {
  const [incomeRecord, setIncomeRecord] = useState("");
  const [visible, setVisible] = useState({
    visible: false,
    data: false,
  });

  const _onClose = () => {
    setVisible({ visible: false, data: false });
  };

  return (
    <div className="container_table_card">
      <h3> Registro de ingresos</h3>

      <div className="d-flex">
        <IncomeCard description="Efectivo" total={"$2,000"} />
        <IncomeCard description="Depósito" total={"$2,000"} />
        <IncomeCard description="Tarjeta" total={"$2,000"} />
      </div>
      <div className="d-flex justify-content-end">
        <Button
          type="primary"
          onClick={() => setVisible({ visible: true, data: false })}
        >
          Añadir ingreso
        </Button>
      </div>
      <ModalIncome
        visible={visible.visible}
        data={visible.data}
        onClose={_onClose}
      />
    </div>
  );
};

export default IncomeRecordCollapse;
